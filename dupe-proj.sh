REPONAME=interview-shortlinks
NAME=$1
NEWREPONAME=$REPONAME-$NAME
NEWREPO=git@github.com:zoomforth/$NEWREPONAME.git
CWD=$(pwd) 

if [ $# -eq 0 ]; then
    echo "Must specify an argument for use as suffix to new repo name (probably a candidate's name)"
    exit 1
fi

echo -n "Waiting for you to create empty repo '$NEWREPONAME'...\n\n   visit https://github.com/organizations/zoomforth/repositories/new\n"
until git ls-remote $NEWREPO > /dev/null 2> /dev/null; 
do 
  sleep 3; 
done;
cd .. && \
  git clone --depth=1 git@github.com:zoomforth/$REPONAME.git $NEWREPONAME && \
  cd $NEWREPONAME &&
  yes | rm -r .git &&
  git init &&
  git add . &&
  git commit -m "Initial import for $NAME" &&
  git remote add origin $NEWREPO
  git push -u origin master