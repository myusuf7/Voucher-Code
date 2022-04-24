# Voucher-Codes

#### Codes and Tests Prepared by:

* Maimaitiyusufu Wulayinmu
* QA Test Automation Engineer
* uysdetlead@gmail.com


## Stack & Libraries

- nightwatch: 1.3.6
- chromedriver: 100.0.0
- chai: 4.2.0
- cucumber: 5.1.0
- cucumber-pretty: 1.5.0
- nightwatch-api: 3.0.1
- debug: 4.3.4

## Setup

    npm install

## Run tests

1.For running a single feature file:

```sh
     npm run test:cucumber -- features/scenarios/searchRestaurantVoucher.feature
```    
2.For running multiple feature files:

```sh
     npm run test:cucumber -- features/scenarios/searchRestaurantVoucher.feature -- features/scenarios/searchRestaurantVoucher.feature(second scenario)
```     
3.To run the features or scenarios marked with the tag @tag:
```sh
     npm run test:cucumber -- --tags '@tag'
```
4.To skip running the features or scenarios marked with tag @tag:
```sh
     npm run test:cucumber -- --tags 'not @tag'
```

## Created packages explanation:

- page-objects : store page specific elements and functions
- scenarios : store feature files 
- step_definitions : store step definitions for scenarios
- test_output : store screenshots

## Added scenarios:

#### Location : features - scenarios - searchRestaurantVoucher
Scenario : Verify user able search voucher for restaurant by sending values for city and people

-----------------------------
2022 April

### End