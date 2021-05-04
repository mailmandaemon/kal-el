# Code Snippets and notes

## Multiple line message embeds - [Stack Exchange](https://stackoverflow.com/questions/49334420/discord-js-embedded-message-multiple-line-value) 
```javascript
message.channel.send({embed: {
      color: 3447003,
      title: "Test:",
      fields: [
        { name: "Test 1", value: "Line1\nLine2\nLine3", inline: true},
        { name: "Test 2", value: "AlsoLine1\nAlsoLine2\nAndLine3", inline: true}
      ]
    }
  });
```
### Example Of how I might use it
Need to work out how to iterate over embed fields to  
- ensure uniform width of Date, time and activity columns
- append \n to the end of each result

```javascript
const AllDates = "Date1\nDate2\nDate3"
const AllTimes = "Time1\nTime2\nTime3"
const AllActivities = "Activity1\nActivity2\nActivity3"
const AllJoinIDs = "Join_ID1\nJoin_ID2\nJoin_ID3"

const embed = new Discord.Message.Embed()
      .setColor: 3447003,
      .setTitle: "Planned LFGs:",
      .setFooter: // add author and last updated message
      .addFields: [
        { name: "Date", value: AllDates, inline: true},
        { name: "Time", value: AllTimes, inline: true}
        { name: "Activity", value: AllActivties, inline: true}
        { name: "Join ID", value: AllJoinIDs, inline: true}
      ]

message.channel.send(embed);
``` 