source ~/.nvm/nvm.sh
L=""
TU=""
TE=""
show() {
  printf "\n\n################ ci-validator Summary "
  printf "\n     Linter : $L"
  printf "\n  Unit test : $TU"
  printf "\n  E2E test  : $TE"

  if [ "$L$TU$TE" == "OKOKOK" ]
  then
    printf "\n                 All OK - Rock'n Roll !"
  else
    printf "\n                 ERRORS ERRORS ERRORS !!!"
    printf "\n                 You must correct !"
  fi;
  printf "\n\n"
}

failure() {
  show
  exit 1
}
L="ERROR"
printf "\n################ CI Validator : LINT + TEST\n"
nvm use;npm install;npm run lint || failure
L="OK"
TU="ERROR"
npm run test || failure
TU="OK"
TE="ERROR"
npm run test:e2e || failure
TE="OK"
show
