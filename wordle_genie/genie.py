# -*- coding: utf-8 -*-
"""
Created on Mon Feb 14 17:06:55 2022

@author: WaNiNi
"""

import pickle

import numpy as np
import os 

PATH = os.path.dirname(os.path.realpath(__file__))
with open('./pre_calc/answer_words.pkl', 'rb') as file:
    ANSWER_WORDS = pickle.load(file)

with open('./pre_calc/valid_words.pkl', 'rb') as file:
    VALID_WORDS = pickle.load(file)

with open('./pre_calc/char_in_word.pkl', 'rb') as file:
    CHAR_IN_WORD = pickle.load(file)

def _check_answer(guess: str, answer: str) -> str:
    if guess not in VALID_WORDS:
        return ''
    ret = ['X'] * 5
    for idx, char in enumerate(guess):
        if char == answer[idx]:
            ret[idx] = 'A'
            continue
        if char in answer:
            ret[idx] = 'B'
    return ''.join(ret)

def _get_score(guess: str, answer: str) -> int:
    if guess not in VALID_WORDS:
        return ""
    ret = 0
    cur = 1
    for idx, char in enumerate(guess):
        if char in answer:
            ret += cur
            if char == answer[idx]:
                ret += cur
        cur *= 3
    return ret

with open('./pre_calc/decision_tree.pkl', 'rb') as file:
    DECISION_TREE = pickle.load(file) 

def _result2score(reuslt: str) -> int:
    ret = 0
    cur = 1
    for char in reuslt:
        if char == 'B':
            ret += cur
        if char == 'A':
            ret += cur * 2
        cur *= 3
    return ret
    
class WordleServer:
    def __init__(self):
        self._answer = ANSWER_WORDS[np.random.randint(0, len(ANSWER_WORDS))]
        self._remaining = 5
        
    def check_result(self, guess_word: str):
        return _check_answer(guess_word, self._answer)
    
    def set_answer(self, answer):
        self._answer = answer
        
class WordleClient:
    def __init__(self):
        self._tree = DECISION_TREE 
        
    def guess(self):
        return self._tree['node']
        
    def update(self, guess: str, result: str):
        self._tree = self._tree['tree'][result]

if __name__ == '__main__':
    import json
    from http_server import ServerFactory, STATUS_OK, STATUS_FAILED
    import warnings
    import logging
    
    buffers = {}
    
    def cmd_handler(cmd_info):
        recv_json = json.loads(cmd_info.decode("utf-8"))
        with open('./log.txt', 'a') as f:
            f.write(str(recv_json) + '\n')
        logging.debug('Receive json: %s'%cmd_info)
        command, data = recv_json['cmd'], recv_json['data']
        resp_json = {}
        resp_json['data']={}
        try:
            if command == 'startGame':
                uid = data["requestId"]
                buffers[uid] = (WordleServer(), WordleClient())
                ret = None
            elif command == 'getAnswer':
                uid = data["requestId"]
                guess = data["answer"].lower()
                game_server, game_client = buffers[uid]
                result = game_server.check_result(guess)
                if not result:
                    ret = [result, '', '']
                else:
                    cguess = game_client.guess()
                    cresult = game_server.check_result(cguess)
                    game_client.update(cguess, cresult)
                    ret = [result, cguess, cresult]
            elif command == 'endGame':
                uid = data["requestId"]
                del buffers[uid]
                ret = None
            else:
                resp_json['status_message'] = f"Command not found: {command}"
                raise ValueError("invalid command")
            if isinstance(ret, Exception):
                raise ret
            else:
                resp_json["data"] = ret
                resp_json['status'] = STATUS_OK
        except Exception as esp:
            resp_json['status'] = STATUS_FAILED
            resp_json['data'] = (f"cmd: {command}\ndata: {data}\n"
                                 f"{esp.__class__.__name__}: {esp}")
        return json.dumps(resp_json).encode('utf-8')
    
    warnings.filterwarnings('ignore')
    PORT=8082
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s : %(message)s')
    httpd = ServerFactory.create("", PORT, cmd_handler, is_multithread=True, limited_threads_number=256)
    print("Genie serving on port: "+str(httpd.server_port))
    httpd.serve_forever()
    