---
layout: default
title: 8. CoinItem 컴포넌트에 더미 데이터 넣기
parent: 실시간 코인 정보 앱
grand_parent: Make Sample Apps(한글)
nav_order: 8
---

## 8. Push Dummies Into The CoinItem Component

### Use sample data

We will use sample data from [Coinmarketcap Api](https://coinmarketcap.com/api/).
Copy and paste some data into your CoinView component.

screens/CoinView.js

```js
const sampleData = [
   {
         "id": "bitcoin",
         "name": "Bitcoin",
         "symbol": "BTC",
         "rank": "1",
         "price_usd": "6195.6",
         "price_btc": "1.0",
         "24h_volume_usd": "8119580000.0",
         "market_cap_usd": "103323711420",
         "available_supply": "16676950.0",
         "total_supply": "16676950.0",
         "max_supply": "21000000.0",
         "percent_change_1h": "-1.8",
         "percent_change_24h": "4.19",
         "percent_change_7d": "-15.65",
         "last_updated": "1510556652"
     },
     {
         "id": "ethereum",
         "name": "Ethereum",
         "symbol": "ETH",
         "rank": "2",
         "price_usd": "310.13",
         "price_btc": "0.0493027",
         "24h_volume_usd": "1636680000.0",
         "market_cap_usd": "29678006174.0",
         "available_supply": "95695373.0",
         "total_supply": "95695373.0",
         "max_supply": null,
         "percent_change_1h": "-0.89",
         "percent_change_24h": "1.81",
         "percent_change_7d": "4.39",
         "last_updated": "1510556649"
     },
 ];
```

Apply data

screens/CoinView.js

```js
class CoinView extends React.Component {
  render() {
    let coinItems = sampleData.map( (data, index) => {
      const {rank, name, price_usd, market_cap_usd, time} = data; // Destructuring
      return (
        <CoinItem
          key={index}
          rank={rank}
          name={name}
          price={price_usd}
          volume={market_cap_usd}
        />
      );
    });

 /** Same expression with above **/
    // let coinItems = [];

    // for (var i = 0; i < sampleData.length; i++) {
    //   let data = sampleData[i];
    //   let CoinItem = (
    //     <CoinItem
    //       key={data.index}
    //       rank={data.rank}
    //       name={data.name}
    //       price={data.price_usd}
    //       volume={data.market_cap_usd}
    //     />
    //   )
    //   coinItems.push(CoinItem);
    // }

    return (
      <View style={[styles.container, this.props.style]}>
        {coinItems}
      </View>
    );
  }
}

...
```

#### Run

![DummyData](../images/sampleData.png)
