cd _site
ssh-add $GIT_KEY
git clone git@github.com:arpitbatra123/test-repo.git
cp -R ./posts ./test-repo/
cp -R ./styles ./test-repo/
cp ./index.html ./test-repo/
cd test-repo
git add .
git commit -m "New Deploy From Netlify"
git push
