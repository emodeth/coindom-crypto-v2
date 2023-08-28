import Loader from "../../components/loader/Loader";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./coin.scss";

const descriptions = [
  {
    description:
      "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.\r\n\r\nBitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.\r\n\r\nBitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the SHA-256 hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.\r\n\r\nBeing the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as Litecoin, Peercoin, Primecoin, and so on.\r\n\r\nThe cryptocurrency then took off with the innovation of the turing-complete smart contract by Ethereum which led to the development of other amazing projects such as EOS, Tron, and even crypto-collectibles such as CryptoKitties.",
    symbol: "btc",
  },

  {
    description:
      "Ethereum is a global, open-source platform for decentralized applications. In other words, the vision is to create a world computer that anyone can build applications in a decentralized manner; while all states and data are distributed and publicly accessible. Ethereum supports smart contracts in which developers can write code in order to program digital value. Examples of decentralized apps (dapps) that are built on Ethereum includes tokens, non-fungible tokens, decentralized finance apps, lending protocol, decentralized exchanges, and much more.\r\n\r\nOn Ethereum, all transactions and smart contract executions require a small fee to be paid. This fee is called Gas. In technical terms, Gas refers to the unit of measure on the amount of computational effort required to execute an operation or a smart contract. The more complex the execution operation is, the more gas is required to fulfill that operation. Gas fees are paid entirely in Ether (ETH), which is the native coin of the blockchain. The price of gas can fluctuate from time to time depending on the network demand.",
    symbol: "eth",
  },
  {
    description:
      "Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called “stable coins.” Tether is the most popular stable coin and even acts as a dollar replacement on many popular exchanges! According to their site, Tether converts cash into digital currency, to anchor or “tether” the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen. Like other cryptos it uses blockchain. Unlike other cryptos, it is [according to the official Tether site] “100% backed by USD” (USD is held in reserve). The primary use of Tether is that it offers some stability to the otherwise volatile crypto space and offers liquidity to exchanges who can’t deal in dollars and with banks (for example to the sometimes controversial but leading exchange Bitfinex.\r\n\r\nThe digital coins are issued by a company called Tether Limited that is governed by the laws of the British Virgin Islands, according to the legal part of its website. It is incorporated in Hong Kong. It has emerged that Jan Ludovicus van der Velde is the CEO of cryptocurrency exchange Bitfinex, which has been accused of being involved in the price manipulation of bitcoin, as well as tether. Many people trading on exchanges, including Bitfinex, will use tether to buy other cryptocurrencies like bitcoin. Tether Limited argues that using this method to buy virtual currencies allows users to move fiat in and out of an exchange more quickly and cheaply. Also, exchanges typically have rocky relationships with banks, and using Tether is a way to circumvent that.\r\n\r\nUSDT is fairly simple to use. Once on exchanges like Poloniex or Bittrex, it can be used to purchase Bitcoin and other cryptocurrencies. It can be easily transferred from an exchange to any Omni Layer enabled wallet. Tether has no transaction fees, although external wallets and exchanges may charge one. In order to convert USDT to USD and vise versa through the Tether.to Platform, users must pay a small fee. Buying and selling Tether for Bitcoin can be done through a variety of exchanges like the ones mentioned previously or through the Tether.to platform, which also allows the conversion between USD to and from your bank account.",
    symbol: "usdt",
  },
  {
    description:
      'Binance Coin is the cryptocurrency of the Binance platform. It is a trading platform exclusively for cryptocurrencies. The name "Binance" is a combination of binary and finance.\r\n\r\nThus, the startup name shows that only cryptocurrencies can be traded against each other. It is not possible to trade crypto currencies against Fiat. The platform achieved an enormous success within a very short time and is focused on worldwide market with Malta headquarters. The cryptocurrency currently has a daily trading volume of 1.5 billion - 2 billion US dollars and is still increasing.\r\n\r\nIn total, there will only be 200 million BNBs. Binance uses the ERC20 token standard from Ethereum and has distributed it as follow: 50% sold on ICO, 40% to the team and 10% to Angel investors. The coin can be used to pay fees on Binance. These include trading fees, transaction fees, listing fees and others. Binance gives you a huge discount when fees are paid in BNB. \r\n\r\nThe schedule of BNB fees discount is as follow: In the first year, 50% discount on all fees, second year 25% discount, third year 12.5% discount, fourth year 6.75 % discount, and from the fifth year onwards there is no discount. This structure is used to incentivize users to buy BNB and do trades within Binance.\r\n\r\nBinance announced in a buyback plan that it would buy back up to 100 million BNB in Q1 2018. The coins are then burned. This means that they are devaluated to increase the value of the remaining coins. This benefits investors. In the future, the cryptocurrency will remain an asset on the trading platform and will be used as gas.\r\n\r\nOther tokens that are issued by exchanges include Bibox Token, OKB, Huobi Token, and more.',
    symbol: "bnb",
  },
  {
    description:
      "Ripple is the catchall name for the cryptocurrency platform, the transactional protocol for which is actually XRP, in the same fashion as Ethereum is the name for the platform that facilitates trades in Ether. Like other cryptocurrencies, Ripple is built atop the idea of a distributed ledger network which requires various parties to participate in validating transactions, rather than any singular centralized authority. That facilitates transactions all over the world, and transfer fees are far cheaper than the likes of bitcoin. Unlike other cryptocurrencies, XRP transfers are effectively immediate, requiring no typical confirmation time.\r\n\r\nRipple was originally founded by a single company, Ripple Labs, and continues to be backed by it, rather than the larger network of developers that continue bitcoin’s development. It also doesn’t have a fluctuating amount of its currency in existence. Where bitcoin has a continually growing pool with an eventual maximum, and Ethereum theoretically has no limit, Ripple was created with all of its 100 billion XRP tokens right out of the gate. That number is maintained with no mining and most of the tokens are owned and held by Ripple Labs itself — around 60 billion at the latest count.\r\n\r\nEven at the recently reduced value of around half a dollar per XRP, that means Ripple Labs is currently sitting on around $20 billion worth of the cryptocurrency (note: Ripple’s price crashed hard recently, and may be worth far less than $60 billion by time you read this). It holds 55 billion XRP in an escrow account, which allows it to sell up to a billion per month if it so chooses in order to fund new projects and acquisitions. Selling such an amount would likely have a drastic effect on the cryptocurrency’s value, and isn’t something Ripple Labs plans to do anytime soon.\r\n\r\nIn actuality, Ripple Labs is looking to leverage the technology behind XRP to allow for faster banking transactions around the world. While Bitcoin and other cryptocurrencies are built on the idea of separating financial transactions from the financial organizations of traditional currencies, Ripple is almost the opposite in every sense.\r\n\r\nXRP by Ripple price can be found on this page alongside the market capitalization and additional stats.\r\n\r\n",
    symbol: "xrp",
  },
  {
    description:
      "USDC is a fully collateralized US dollar stablecoin. USDC is the bridge between dollars and trading on cryptocurrency exchanges. The technology behind CENTRE makes it possible to exchange value between people, businesses and financial institutions just like email between mail services and texts between SMS providers. We believe by removing artificial economic borders, we can create a more inclusive global economy.",
    symbol: "usdc",
  },
  {
    description: "",
    symbol: "ada",
  },
  {
    description:
      'Dogecoin is a cryptocurrency based on the popular "Doge" Internet meme and features a Shiba Inu on its logo. Dogecoin is a  fork. Introduced as a "joke currency" on 6 December 2013, Dogecoin quickly developed its own online community and reached a capitalization of US$60 million in January 2014. Compared with other cryptocurrencies, Dogecoin had a fast initial coin production schedule: 100 billion coins were in circulation by mid-2015, with an additional 5.256 billion coins every year thereafter. As of 30 June 2015, the 100 billionth Dogecoin had been mined. \r\n\r\nDogecoin was created by Billy Markus from Portland, Oregon and  Jackson Palmer from Sydney, Australia. Both wanted to create a fun cryptocurrency that will appeal beyond the core Bitcoin audience. Dogecoin is primarily used as a tipping system on Reddit and Twitter where users tip each other for creating or sharing good content. The community is very active in organising fundraising activities for deserving causes.\r\n\r\nThe developers of Dogecoin haven’t made any major changes to the coin since 2015. This means that Dogecoin could get left behind and is why Shibas are leaving Dogecoin to join more advanced platforms like Ethereum. One of Dogecoin strengths is its relaxed and fun-loving community. However, this is also a weakness because other currencies are way more professional.\r\n\r\nTo purchase Dogecoin, it involves downloading a crypto wallet, setting up a crypto exchange account and then trading away for your desired crypto currency. Once we have set up an account with a DOGE currency exchange and deposited some funds, you are ready to start trading. ',
    symbol: "doge",
  },
  {
    description:
      "\r\nSolana is a highly functional open source project that banks on blockchain technology’s permissionless nature to provide decentralized finance (DeFi) solutions. It is a layer 1 network that offers fast speeds and affordable costs. While the idea and initial work on the project began in 2017, Solana was officially launched in March 2020 by the Solana Foundation with headquarters in Geneva, Switzerland.",
    symbol: "sol",
  },
  {
    description:
      "What is Tron?\r\nTron's mission is to build a truly decentralized internet and aims to be the largest blockchain-based operating system in the world, known as the TRON protocol. The TRON protocol will offer high scalability, high availability, and high throughput computing to serve decentralized applications via smart contracts. Ethereum EVM-based smart contracts will be compatible and deployable on the TRON network as such Solidity developers do not have to rewrite their applications.\r\n\r\nWhy Tron?\r\nSince TRON protocol does not rely on proof of work or mining, instead governed by nodes located around the world, it is decentralized while providing high throughput for transactions on the blockchain. This is suitable for dapps that require high speed transactions especially games. There are a number of tokens already issued on the TRON network and the decentralized exchanges TRX.market has launched.\r\n\r\nOn July 24th 2018, TRON acquired BitTorrent, one of the largest P2P file sharing protocol. As a result of the acquisition, BitTorrent Token (BTT) was launched as the cryptocurrency to power the economics on the BitTorrent network. The Token will be used to inceltivize file sharing and storage within the network.\r\n",
    symbol: "trx",
  },
  {
    description:
      "Polkadot is a platform that allows diverse blockchains to transfer messages, including value, in a trust-free fashion; sharing their unique features while pooling their security. In brief, Polkadot is a scalable heterogeneous multi-chain technology.\r\n\r\nPolkadot is heterogeneous because it is entirely flexible and makes no assumption about the nature or structure of the chains in the network. Even non-blockchain systems or data structures can become parachains if they fulfill a set of criteria.\r\n\r\nPolkadot may be considered equivalent to a set of independent chains (e.g. a set containing Ethereum, Ethereum Classic, Namecoin and Bitcoin) except with important additions: pooled security and trust-free interchain transactability.\r\n\r\nMany of the native parachains of Polkadot will be written using a Polkadot Runtime Environment SDK (e.g. Parity Technologies' Substrate).",
    symbol: "dot",
  },
  {
    description:
      "What is WETH (Wrapped ETH)?\r\nWETH is the tokenized/packaged form of ETH that you use to pay for items when you interact with Ethereum dApps. WETH follows the ERC-20 token standards, enabling it to achieve interoperability with other ERC-20 tokens. \r\n\r\nThis offers more utility to holders as they can use it across networks and dApps. You can stake, yield farm, lend, and provide liquidity to various liquidity pools with WETH. \r\n\r\nAlso, unlike ETH, which doesn’t conform to its own ERC-20 standard and thus has lower interoperability as it can’t be used on other chains besides Ethereum, WETH can be used on cheaper and high throughput alternatives like Binance, Polygon, Solana, and Cardano.\r\n\r\nThe price of WETH will always be the same as ETH because it maintains a 1:1 wrapping ratio.\r\n\r\nHow to Wrap ETH?\r\nCustodians wrap and unwrap ETH. To wrap ETH, you send ETH to a custodian. This can be a multi-sig wallet, a Decentralized Autonomous Organization (DAO), or a smart contract. After connecting your web3 wallet to a DeFi exchange, you enter the amount of ETH you wish to wrap and click the swap function. Once the transaction is confirmed, you will receive WETH tokens equivalent to the ETH that you’ve swapped.\r\n\r\nOn a centralized exchange, the exchange burns the deposited ETH and mints a wrapped form for you. And when you want to unwrap it, the exchange will burn the wrapped version and mint the ETH on your behalf.\r\n\r\nWhat’s Next for WETH?\r\nAccording to the developers, hopefully there will be no future for WETH. According to the website, steps are being taken to update ETH to make it compliant with its own ERC-20 standards. ",
    symbol: "weth",
  },
  {
    description:
      "wstETH (wrapped stETH) is a non-rebasing version of stETH. Unlike the stETH balance, which updates every day and communicates your share of rewards, the wstETH balance stays the same while the stETH balance updates inside the wrapper daily.",
    symbol: "wsteth",
  },
  {
    description:
      "Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications.\r\n\r\nUsing Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. \r\n\r\nPolygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.\r\n\r\nNothing will change for the existing ecosystem built on the Plasma-POS chain. With Polygon, new features are being built around the existing proven technology to expand the ability to cater to diverse needs from the developer ecosystem. Polygon will continue to develop the core technology so that it can scale to a larger ecosystem. \r\n\r\nThe $MATIC token will continue to exist and will play an increasingly important role, securing the system and enabling governance.",
    symbol: "matic",
  },
  {
    description:
      "Shiba Inu (SHIB) is a meme token which began as a fun currency and has now transformed into a decentralized ecosystem. During the initial launch, 50% of the supply was allocated into Vitalik Buterin's ethereum wallet. \r\n\r\nAs a result of that, Vitalik proceeded to donate 10% of his SHIB holdings to a COVID-19 relief effort in India and the remaining 40% is burnt forever. That donation was worth about $1 billion at that time, which makes it one of the largest donation ever in the world.\r\n\r\nWhat is the Shiba Inu community working on right now? The Shiba Inu team launched a decentralized exchange called Shibaswap with 2 new tokens, LEASH and BONE. LEASH is a scarce supply token that is used to offer incentives on Shibaswap. BONE is the governance token for holders to vote on proposals on Doggy DAO.",
    symbol: "shib",
  },
  {
    description:
      "Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins.\r\n\r\nWhy Litecoin?\r\nLitecoin is a cryptocurrency that has evolved from Bitcoin after its own popularity in the industry, this alternative, or ‘altcoin’ has emerged to allow investors to diversify their digital currency package, according to Investopedia. Litecoin is one of the most prominent altcoins and was created by former Google employee and Director of Engineering at Coinbase, Charlie Lee. Litecoin was the first to alter Bitcoin and the most significant difference is that it takes 2.5 minutes for Litecoin to generate a block, or transaction, in comparison to Bitcoin's 10 minutes.\r\n\r\n‘While this matters little to traders, miners who use hardware to run Bitcoin's network cannot switch over to Litecoin. This keeps bigger mining conglomerates away from Litecoin because they cannot easily optimize their profits by swapping to another coin, contributing to a more decentralized experience. Litecoin also has bigger blocks, and more coins in circulation, making it more affordable and swift when transacting,’ Investopedia explained.\r\n\r\nAs explained above, Litecoin can transact a lot faster than Bitcoin, but there are also a number of other characteristics that investors need to know before trading. Litecoin can handle higher volumes of transactions because of the capability of transacting faster and if Bitcoin attempted to transact on the scale of its altcoin, a code update would be needed. However, Litecoin’s blocks would be larger, but with more ‘orphaned blocks'. The faster block time of litecoin reduces the risk of double spending attacks - this is theoretical in the case of both networks having the same hashing power.\r\n\r\nLitecoin Technical Details:\r\nThe transaction confirmation time taken for Litecoin is about 2.5 minutes on average (as compared to Bitcoin's 10 minutes). The Litecoin network is scheduled to cap at 84 million currency units. \r\n\r\nLitecoin has inspired many other popular alternative currencies (eg. Dogecoin) because of its Scrypt hashing algorithm in order to prevent ASIC miners from mining those coins. However it is said that by the end of this year, Scrypt ASIC will enter the mass market.",
    symbol: "ltc",
  },
  {
    description:
      "DAI is an algorithmic stablecoin issued by MakerDAO, an Ethereum-based protocol, that seeks to maintain an exact ratio of one-to-one with the U.S. dollar. It is primarily used as a means of lending and borrowing crypto assets without the need for an intermediary — creating a permissionless system with transparency and minimal restrictions.",
    symbol: "dai",
  },
  {
    description:
      "UNI is the governance token for Uniswap, an Automated Market Marker DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance of the protocol. Key decisions such as usage of the treasury or future upgrades can be decided through a governance vote.",
    symbol: "uni",
  },
  {
    description:
      "Bitcoin Cash is a hard fork of Bitcoin with a protocol upgrade to fix on-chain capacity. Bitcoin Cash intends to be a Bitcoin without Segregated Witness (SegWit) as soft fork, where upgrades of the protocol are done mainly through hard forks and without changing the original economic rules of the Bitcoin.\r\n\r\nBitcoin Cash (BCH) is released on 1st August 2017 as an upgraded version of the original Bitcoin Core software. The main upgrade is the increase in the block size limit from 1MB to 8MB. This effectively allows miners on the BCH chain to process up to 8 times more payments per second in comparison to Bitcoin. This makes for faster, cheaper transactions and a much smoother user experience.\r\n\r\nWhy was Bitcoin Cash Created?\r\n\r\nThe main objective of Bitcoin Cash is to to bring back the essential qualities of money inherent in the original Bitcoin software. Over the years, these qualities were filtered out of Bitcoin Core and progress was stifled by various people, organizations, and companies involved in Bitcoin protocol development. The result is that Bitcoin Core is currently unusable as money due to increasingly high fees per transactions and transfer times taking hours to complete. This is all because of the 1MB limitation of Bitcoin Core’s block size, causing it unable to accommodate to large number of transactions.\r\n\r\nEssentially Bitcoin Cash is a community-activated upgrade (otherwise known as a hard fork) of Bitcoin that increased the block size to 8MB, solving the scaling issues that plague Bitcoin Core today.\r\n\r\nNov 16th 2018: A hashwar resulted in a split between Bitcoin SV and Bitcoin ABC",
    symbol: "bch",
  },
  {
    description:
      "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly.\r\n\r\nMainnet was launched in September 21, 2020. Since then, the platform has grown to secure over 100+ individual projects, $1.4M+ of AVAX burned (reducing supply), 950+ individual block-producing validators, and over 500k+ community members around the globe. Decentralized finance (DeFi) applications can be found on Avalanche such as Pangolin, TraderJoe, and more.",
    symbol: "avax",
  },
  {
    description:
      "Chainlink is a framework for building Decentralized Oracle Networks (DONs) that bring real-world data onto blockchain networks, enabling the creation of hybrid smart contracts. These DONs provide decentralized services such as Price Feeds, Proof of Reserve, Verifiable Randomness, Keepers, and the ability to connect to any web API. \r\n\r\nIt aims to ensure that the external information (pricing, weather data, event outcomes, etc.) and off-chain computations (randomness, transaction automation, fair ordering, etc.) fed to on-chain smart contracts are reliable and tamper-proof.",
    symbol: "link",
  },
  {
    description:
      "Binance USD (BUSD) is a stable coin pegged to USD that has received approval from the New York State Department of Financial Services (NYDFS). BUSD will be available for direct purchase and redemption at a rate of 1 BUSD = 1 USD. ",
    symbol: "busd",
  },
  {
    description:
      "Monero is a private decentralized cryptocurrency that obfuscates the 3 parts of any transaction – the sender is obfuscated through ring signatures, the amount sent is obfuscated through RingCT and the receiver is obfuscated through stealth addresses. Monero uses XMR as its currency.",
    symbol: "xmr",
  },
  {
    description:
      'The Stellar network is an open source, distributed, and community owned network used to facilitate cross-asset transfers of value. Stellar aims to help facilitate cross-asset transfer of value at a fraction of a penny while aiming to be an open financial system that gives people of all income levels access to low-cost financial services. Stellar can handle exchanges between fiat-based currencies and between cryptocurrencies. Stellar.org, the organization that supports Stellar, is centralized like XRP and meant to handle cross platform transactions and micro transactions like XRP. However, unlike Ripple, Stellar.org is non-profit and their platform itself is open source and decentralized. \r\n\r\nStellar was founded by Jed McCaleb in 2014. Jed McCaleb is also the founder of Mt. Gox and co-founder of Ripple, launched the network system Stellar with former lawyer Joyce Kim. Stellar is also a payment technology that aims to connect financial institutions and drastically reduce the cost and time required for cross-border transfers. In fact, both payment networks used the same protocol initially.\r\n\r\nDistributed Exchange\r\nThrough the use of its intermediary currency Lumens (XLM), a user can send any currency that they own to anyone else in a different currency.\r\n\r\nFor instance, if Joe wanted to send USD to Mary using her EUR, an offer is submitted to the distributed exchange selling USD for EUR. This submitted offer forms is known as an order book. The network will use the order book to find the best exchange rate for the transaction in-order to minimize the fee paid by a user.\r\n\r\nThis multi-currency transaction is possible because of "Anchors". Anchors are trusted entities that hold people’s deposits and can issue credit. In essence, Anchors serves as the bridge between different currencies and the Stellar network.\r\n\r\nLumens (XLM)\r\nLumens are the native asset (digital currency) that exist on the Stellar network that helps to facilitate multi-currency transactions and prevent spams. For multi-currency transactions, XLM is the digital intermediary that allows for such a transaction to occur at a low cost.\r\n\r\nIn-order to prevent DoS attacks (aka spams) that would inevitably occur on the Stellar network, a small fee of 0.00001 XLM is associated with every transaction that occurs on the network. This fee is small enough so it does not significantly affect the cost of transaction, but large enough so it dissuades bad actors from spamming the network. \r\n\r\nPrior to Protocol 12, Stellar had a built-in inflation mechanism conceived to allow account holders to collectively direct inflation-generated lumens toward projects built on Stellar.\r\n\r\nAs the network evolved and grew, it became increasingly clear that inflation wasn’t working as intended — account holders either didn’t set their inflation destination or joined inflation pools to claim the inflation themselves, and the operational costs associated with inflation payments continued to rise — and so a protocol change to disable inflation was proposed, implemented, voted on by validators, and ultimately adopted as part of a network upgrade.\r\n\r\nThe inflation operation is now deprecated.\r\nhttps://developers.stellar.org/docs/glossary/inflation/\r\n',
    symbol: "xlm",
  },
  {
    description:
      "The Cosmos network consists of many independent, parallel blockchains, called zones, each powered by classical Byzantine fault-tolerant (BFT) consensus protocols like Tendermint (already used by platforms like ErisDB). Some zones act as hubs with respect to other zones, allowing many zones to interoperate through a shared hub. The architecture is a more general application of the Bitcoin sidechains concept, using classic BFT and Proof-of-Stake algorithms, instead of Proof-of-Work.Cosmos can interoperate with multiple other applications and cryptocurrencies, something other blockchains can’t do well. By creating a new zone, you can plug any blockchain system into the Cosmos hub and pass tokens back and forth between those zones, without the need for an intermediary.\r\n\r\nWhile the Cosmos Hub is a multi-asset distributed ledger, there is a special native token called the atom. Atoms have three use cases: as a spam-prevention mechanism, as staking tokens, and as a voting mechanism in governance.\r\n\r\nAs a spam prevention mechanism, Atoms are used to pay fees. The fee may be proportional to the amount of computation required by the transaction, similar to Ethereum’s concept of “gas”. Fee distribution is done in-protocol and a protocol specification is described here.\r\n\r\nAs staking tokens, Atoms can be “bonded” in order to earn block rewards. The economic security of the Cosmos Hub is a function of the amount of Atoms staked. The more Atoms that are collateralized, the more “skin” there is at stake and the higher the cost of attacking the network. Thus, the more Atoms there are bonded, the greater the economic security of the network.\r\n\r\nAtom holders may govern the Cosmos Hub by voting on proposals with their staked Atoms.",
    symbol: "atom",
  },
  {
    description:
      "Ethereum Classic (ETC) is a decentralized cryptocurrency that was created as a fork of the Ethereum blockchain. The fork occurred in 2016 after a group of Ethereum developers decided to not implement a change to the Ethereum code that would have reversed a hack that had taken place on the Ethereum network.",
    symbol: "etc",
  },
  {
    description:
      "Toncoin (TON) is an open-source network that has received much attention and speculative investment over the past five years. Its innovative sharding system speeds the network up, with a transaction-per-second (TPS) rate much faster than Ethereum (ETH).",
    symbol: "ton",
  },
  {
    description:
      "Hedera is a decentralized public network where developers can build secure, fair applications with near real-time consensus. The platform is owned and governed by a council of global innovators including Avery Dennison, Boeing, Deutsche Telekom, DLA Piper, FIS (WorldPay), Google, IBM, LG Electronics, Magalu, Nomura, Swirlds, Tata Communications, University College London (UCL), Wipro, and Zain Group. \r\n\r\nThe Hedera Consensus Service (HCS) acts as a trust layer for any application or permissioned network and allows for the creation of an immutable and verifiable log of messages. Application messages are submitted to the Hedera network for consensus, given a trusted timestamp, and fairly ordered. Use HCS to track assets across a supply chain, create auditable logs of events in an advertising platform, or even use it as a decentralized ordering service.\r\n\r\n",
    symbol: "hbar",
  },
  {
    description:
      "PancakeSwap is a decentralized exchange that allows you to trade tokens while also offering opportunities to profit from liquidity pools and staking.",
    symbol: "cake",
  },
  {
    description:
      "Internet Computer (IC) is the world’s first blockchain that is capable of running at web speed at unrestrictive capacities. Built by the DFINITY Foundation, IC aims to recreate the web by supporting smart contract development at scale and changing the way people can interact using web services. Internet Computer aims to extend the public internet, so that it can be the world’s computing platform, in a decentralized manner. Internet Computer sets to revolutionalize the design of the crypto economy, with an aim to overhaul traditional software services. \r\n\r\nThe project was founded in October 2016 by Dominic WIllams and have raised a total of $121 million from investors such as Adreessen Horowitz, Polychain Capital, Multicoin Capital and such. On May 10, 2021, DFINITY launched the Internet Computer into the public domain, marking it a major milestone for ICP as it means the internet now functions as a decentralised global computer. This is marked by the release of all of the Internet Computer’s source code into the public domain, as well as ICP utility token that allows tens of thousands of community members to govern the Internet Computer network.\r\n\r\nICP is Internet Computer's native token. It plays three prominent roles:\r\n\r\n1. Network Governance: Users that participate in the governance will be rewarded with ICPI\r\n2. Production of Cycles for Compute: ICP can be converted into cycles where it is used as the transaction fee to access the network. Cycles are burned after used.\r\n3. Rewarding Users: ICP is used as the rewards to incentivize users to participate in the network such as securing the network.",
    symbol: "icp",
  },
  {
    description:
      "The Filecoin network achieves staggering economies of scale by allowing anyone worldwide to participate as storage providers. It also makes storage resemble a commodity or utility by decoupling hard-drive space from additional services. On this robust global market the price of storage will be driven by supply and demand, not corporate pricing departments, and miners will compete on factors like reputation for reliability as well as price.",
    symbol: "fil",
  },
  {
    description:
      "Lido DAO is a community that created a liquid staking function for Ethereum and seeks to allow users to yield staking rewards without maintaining staking infrastructure or locking assets. The platform aims to offer users to stake the ether without losing the capability to trade the tokens.",
    symbol: "ldo",
  },
  {
    description:
      "What is Mx Token (MX)? The MEXC platform is a decentralized digital asset exchange that was developed based on the Ethereum blockchain. The MX token is the native token of the MEXC ecosystem and is used to power the MEXC exchange. The main focus of MX is to provide users with a safe and stable trading experience.",
    symbol: "mx",
  },
  {
    description:
      "Arbitrum is one of the leading Ethereum scaling solutions bringing cheap transactions to tens of thousands of users in an environment that feels very similar to Ethereum. It is an optimistic rollup and the leading L2 in terms of TVL. Some of the largest dApps live on Arbitrum include GMX, Radiant, Uniswap V3, and Gains Network.",
    symbol: "arb",
  },
  {
    description:
      "Huobi Token (HT) is the native token of the cryptocurrency exchange Huobi Global. It is a decentralized digital asset based on the Ethereum blockchain and is ERC-20 compliant.",
    symbol: "ht",
  },
  {
    description:
      "Immutable X is aimed at enabling developers to build fast, scalable and secure applications for NFTs and blockchain games. Examples: Application. Functionality provided by Immutable X. Games offering sophisticated economies through true ownership of in-game assets.",
    symbol: "imx",
  },
  {
    description:
      "Launched in 2015 as a private consortium network, the VeChain Foundation went on to develop the VeChainThor public blockchain, a fully programmable EVM compatible L1 smart contract platform that is adaptable to wide-ranging real-world needs. Supply chain, sustainability, carbon emissions, SDGs, De-Fi, NFTs and more, VeChainThor seamlessly handles it all.\r\n\r\nA unique two-token model ensures low and stable transaction costs while an advanced Proof-Of-Authority consensus mechanism guarantees high throughput, scalability, and security with minimal energy consumption, culminating in zero downtime for the network after 3+ years of continuous operation.\r\n\r\nVeChain Technology continues to pioneer real-world blockchain applications across the globe with offices in China, Singapore, Luxembourg, Japan, France, San Marino and the United States.\r\n\r\nStrong independent development capabilities combined with the professional compliance guidance of strategic partners PwC and DNV GL has enabled VeChain to establish partnerships with leading enterprises including Walmart China, Bayer China, BMW Group, BYD Auto, PICC, H&M Group, Shanghai Gas, LVMH, D.I.G, ASI Group and more.\r\n",
    symbol: "vet",
  },
  {
    description: "The first fractional-algorithmic stablecoin",
    symbol: "fxs",
  },
  {
    description:
      "mCoin was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3. mCoin provides a foundation to support a decentralized web, controlled by its users, and to simplify the creation of new applications, institutions and services.",
    symbol: "mcoin",
  },
  {
    description:
      "Trust Wallet Token, or TWT, is a simple BEP-20 utility token that provides a range of benefits and incentives to Trust Wallet users. Trust Wallet itself is a mobile cryptocurrency wallet that supports dozens of popular native assets, in addition to popular tokens on the Ethereum, Binance and TRON blockchains.",
    symbol: "twt",
  },
  {
    description:
      "Pax Dollar (USDP) is a stablecoin created by Paxos, a licenced trust firm and financial institution that ensures the backing of the tokens with US dollar deposits. With the USDP, Paxos created a token that combines the confidence and stability of fiat money with the usefulness and immediacy of digital assets.",
    symbol: "usdp",
  },
  {
    description:
      "MKR is a cryptocurrency depicted as a smart contract platform and works alongside the Dai coin and aims to act as a hedge currency that provides traders with a stable alternative to the majority of coins currently available on the market. Maker offers a transparent stablecoin system that is fully inspectable on the Ethereum blockchain. Founded almost three years ago, MakerDao is lead by Rune Christensen, its CEO and founder. Maker’s MKR coin is a recent entrant to the market and is not a well known project. However, after today it will be known by many more people after blowing up 40% and it is one of the coins to rise to prominence during the recent peaks and troughs.\r\n\r\nAfter being developed by the MakerDAO team, Maker Dai officially went live on December 18th, 2017. Dai is a price stable coin that is suitable for payments, savings, or collateral and provides cryptocurrency traders with increased options concerning opening and closing positions. Dai lives completely on the blockchain chain with its stability unmediated by the legal system or trusted counterparties and helps facilitate trading while staying entirely in the world of cryptocurrencies. The concept of a stablecoin is fairly straight forward – it’s a token that has its price or value pegged to a particular fiat currency. A stablecoin is a token (like Bitcoin and Ethereum) that exists on a blockchain, but unlike Bitcoin or Ethereum, Dai has no volatility.\r\n\r\nMKR is an ERC-20 token on the Ethereum blockchain and can not be mined. It’s instead created/destroyed in response to DAI price fluctuations in order to keep it hovering around $1 USD. MKR is used to pay transaction fees on the Maker system, and it collateralizes the system. Holding MKR comes with voting rights within Maker’s continuous approval voting system. Bad governance devalues MKR tokens, so MKR holders are incentivized to vote for the good of the entire system. It’s a fully decentralized and democratic structure, then, which is an underutilized USP of blockchain tech.\r\n\r\nValue volatility is a relative concept among both cryptos and fiat currencies. The US dollar, for example, was worth 110.748 yen on July 9, 2018. On July 4, 2011, $1 was worth 80.64 yen, and on March 18, 1985, $1 was worth 255.65 yen. These are major differences in exchange rates, and inflation within each country makes each currency worth different values even when compared to themselves. One USD in 1913 is worth the equivalent of $25.41 today, and even $1 in 1993 is worth the equivalent of $1.74 today. Stablecoins don’t negate these basic economic principles of value. Instead, both Tether and Dai have values pegged to the U.S. dollar. This is done to stabilize the price.",
    symbol: "mkr",
  },
  {
    description:
      "London-based Quant Network is set to revolutionise blockchain technology with the development of their blockchain operating system Overledger. The experienced team are determined to fulfil the original vision of the internet by creating an open trusted network for people, machines, and data to operate securely and safely.\r\n\r\nOverledger -the first interoperable blockchain operating system that facilitates internet-scale development of decentralised, multi-chain applications. Overledger has the ability to unlock and distribute value and applications across current and future blockchains. It is an agnostic platform that connects the world's networks to blockchains and ensures you're not limited to any single a vendor or technology. Overledger is the only platform that facilitates the development of internet-scales development of decentralised, multi-chain applications.",
    symbol: "qnt",
  },
  {
    description:
      "Rocket Pool is a next generation decentralised staking pool protocol for Ethereum.\r\n\r\nRocket Pool ETH (rETH) is the Rocket Pool protocol's liquid staking token. The rETH token represents an amount of ETH that is being staked and earning rewards within Ethereum Proof-of-Stake. As Rocket Pool node operators, stake Ethereum on Proof-of-Stake the resulting rewards increase the value of rETH  relative to ETH. Rocket Pool's liquid staking token allows holders to benefit from the returns of the Ethereum Proof-of-Stake.\r\n\r\nMore information on Rocket Pool and rETH can be found at https://rocketpool.net.",
    symbol: "reth",
  },
  {
    description:
      "Aave is a decentralized money market protocol where users can lend and borrow cryptocurrency across 20 different assets as collateral. The protocol has a native token called AAVE, which is also a governance token that lets the community decide the direction of the protocol in a collective manner. Lenders can earn interest by providing liquidity to the market, while borrowers can borrow by collateralizing their cryptoassets to take out loans from the liquidity pools.\r\n\r\n",
    symbol: "aave",
  },
  {
    description:
      "Baby Doge is one of the cryptocurrencies that charges a transaction fee to encourage investment. It awards its users by adding Baby Doge Coins to their wallets after each transaction.",
    symbol: "babydoge",
  },
  {
    description: "The first fractional-algorithmic stablecoin",
    symbol: "frax",
  },
  {
    description:
      "What is Cronos? Cronos is the native token of the Cronos chain, a decentralised, open-source, energy-efficient public blockchain with high speed and low transaction fees.",
    symbol: "cro",
  },
  {
    description:
      "ENERGY SWAP is powering open finance through our ecosystem of cross-chain protocols, exchanges, wallet and applications that are the legos to build the next-generation of DeFi.",
    symbol: "ens",
  },
];

function numberWithCommasPrice(price) {
  return Number(price)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7d4091467emsh524b572f75eeea0p162719jsn91e9810a85de",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

function Coin() {
  const { coinId } = useParams();
  const [isCoinLoading, setIsCoinLoading] = useState(false);
  const [coin, setCoin] = useState({});
  const desc = descriptions.find((item) => {
    if (item.symbol === coinId) {
      return item.description;
    }
  });

  const url = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&search=${coinId}&orderDirection=desc&limit=1&offset=0`;

  useEffect(
    function () {
      async function fetchCoin() {
        try {
          setIsCoinLoading(true);

          const res = await fetch(url, options);
          const data = await res.json();
          setCoin(data.data.coins[0]);
          console.log(coin);
        } catch {
          throw new Error("Something went wrong with catching coins");
        } finally {
          setIsCoinLoading(false);
        }
      }

      fetchCoin();
    },
    [url]
  );

  const { name, symbol, change, price, rank, iconUrl, color } = coin;

  return (
    <div className="coin">
      <div className="container">
        <div className="coin__container">
          {isCoinLoading ? (
            <Loader />
          ) : (
            <>
              <div className="coin__coin">
                <img className="coin__image" src={iconUrl} alt={symbol} />
                <p className="coin__name">{name}</p>
                <p className="coin__rank">Rank: #{rank}</p>
              </div>

              <div className="coin__details">
                <div className="coin__details-price">
                  <p className="coin__change">
                    Change:
                    <span className={change >= 0 ? "inc" : "dec"}>
                      {change}%
                    </span>
                  </p>
                  <p className="coin__price">
                    Price:
                    <span className="inc">${numberWithCommasPrice(price)}</span>
                  </p>
                  <p className="coin__symbol">
                    Symbol: <span style={{ color: color }}>{symbol}</span>
                  </p>
                </div>
                <div className="coin__details-summary">
                  <p>{desc.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
