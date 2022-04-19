import os

#again py because we hate fucking bash :sunglasses:

os.system('tmux new -d -s Solver01')
os.system('tmux new -d -s Solver02')
os.system('tmux new -d -s Solver03')
os.system('tmux new -d -s Solver04')
os.system('tmux new -d -s Solver05')
os.system('tmux new -d -s Solver06')
os.system('tmux new -d -s Solver07')
os.system('tmux new -d -s Solver08')
os.system('tmux new -d -s Solver09')
os.system('tmux new -d -s Solver10')

os.system('tmux send-keys -t Solver01.0 "node solvers/flaresolver01/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver02.0 "node solvers/flaresolver02/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver03.0 "node solvers/flaresolver03/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver04.0 "node solvers/flaresolver04/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver05.0 "node solvers/flaresolver05/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver06.0 "node solvers/flaresolver06/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver07.0 "node solvers/flaresolver07/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver08.0 "node solvers/flaresolver08/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver09.0 "node solvers/flaresolver09/dist/server.js" ENTER')
os.system('tmux send-keys -t Solver10.0 "node solvers/flaresolver10/dist/server.js" ENTER')

#done