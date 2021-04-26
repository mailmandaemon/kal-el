# Kal-el
A discord bot for sorting discord messages in date order by message content, and not message created date.

## The problem
Members plan gaming sessions using the charlemagne bot on our discord server. The result is a rich content message (or embed in discord.js speak) that is sorted by the date the message was created and not the date of the planned event.

## The goal
To view all planned session in ascending date order, and example

Date          | Time         | Activity         | Join ID       
------------- | -------------| -----------------| ------------- 
26/04/2021    | 9:00PM AET   | Deep Stone Crypt | 1234 
01/05/2021    | 10:00PM AET  | Last Wish        | 5678         

## Steps
- [x] Set up test server (local environment)
- [x] Connected Charlamagne dicord bot
- [x] Extract content on message create and store in db
- [ ] Extract content on message update and store in db
- [ ] Remove content on message deletion
- [x] Format db content in ascending date order
- [ ] Send formatted message to channel