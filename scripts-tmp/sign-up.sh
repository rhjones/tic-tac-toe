# curl --include --request POST 'http://ttt.wdibos.com/sign-up' \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "kigali@kampala.com",
#       "password": "kampala",
#       "password_confirmation": "kampala",
#     }
#   }'

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\",
      \"password_confirmation\": \"${PASSWORD}\"
    }
  }"

echo