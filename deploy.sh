git reset --hard
git pull origin main

npm i yarn -g
yarn
pm2 start "yarn run dev" --name=TasteitFront