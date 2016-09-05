curl --include --request POST http://tic-tac-toe.wdibos.com/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "kigali@kampala.com",
      "password": "pwd",
      "password_confirmation": "pwd",
    }
  }'