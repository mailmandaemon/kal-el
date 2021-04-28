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
Need to work out how to iterate over embed fields and ensure uniform width 
```javascript
message.channel.send({embed: {
      color: 3447003,
      title: "Planned LFGs:",
      fields: [
        { name: "Date", value: "Date1\nDate2\nDate3", inline: true},
        { name: "Time", value: "Time1\nTime2\nTime3", inline: true}
        { name: "Activity", value: "Activity1\nActivity2\nActivity3", inline: true}
        { name: "Join ID", value: "Join_ID1\nJoin_ID2\nJoin_ID3", inline: true}
      ]
    }
  });
``` 