cd web
call npm install --save
cd ../wordle_genie
call C:\Users\qoa62\miniconda3\Scripts\activate.bat
call conda create --name wordle_genie python=3.8 -y
call conda activate wordle_genie
pip install -r requirements.txt