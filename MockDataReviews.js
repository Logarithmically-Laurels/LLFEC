
  const firstProduct = [{
    id: 37311,
    campus: "hr-rfe",
    name: "Camo Onesie",
    slogan: "Blend in to your crowd",
    description:
      "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
    category: "Jackets",
    default_price: "140.00",
    created_at: "2021-08-13T14:37:33.145Z",
    updated_at: "2021-08-13T14:37:33.145Z",
  }];
const reviewsMock = {
  "product": "37311",
  "page": 0,
  "count": 10,
  "results": [
      {
          "review_id": 1276371,
          "rating": 1,
          "summary": "It's not great! \"\"\"",
          "recommend": true,
          "response": "Thank you for your review!",
          "body": "The product just isn't super good, what can I say? Have this photo of a cat.",
          "date": "2022-09-03T00:00:00.000Z",
          "reviewer_name": "Cat Guy",
          "helpfulness": 52,
          "photos": [
              {
                  "id": 2455959,
                  "url": "https://i.imgur.com/26FhIaw.jpeg"
              }
          ]
      },
      {
          "review_id": 1276361,
          "rating": 3,
          "summary": "asd",
          "recommend": true,
          "response": null,
          "body": "asdsafasafafssdfdsfdsfsfdsfdsfdsfsfsdfsfsdfsffdsfdsdsfd",
          "date": "2022-09-03T00:00:00.000Z",
          "reviewer_name": "sd",
          "helpfulness": 7,
          "photos": []
      },
      {
          "review_id": 1276336,
          "rating": 2,
          "summary": "",
          "recommend": true,
          "response": null,
          "body": "sdufdsuhdfuisdhfsdfdisufdshfdshiufdsfhsdiufsdhfiusd",
          "date": "2022-09-02T00:00:00.000Z",
          "reviewer_name": "Ryan",
          "helpfulness": 16,
          "photos": []
      },
      {
          "review_id": 1276338,
          "rating": 5,
          "summary": "asdadadasdasda",
          "recommend": true,
          "response": null,
          "body": "sdfssdfdsfsdgadfgdfdsgsgsgdsgdsdgsgsdgdsgsdgdsgdsgdsgs",
          "date": "2022-09-02T00:00:00.000Z",
          "reviewer_name": "asdadaads",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2455921,
                  "url": "https://images.unsplash.com/photo-1543005472-1b1d37fa4eae"
              }
          ]
      },
      {
          "review_id": 1276279,
          "rating": 5,
          "summary": "Validated at last",
          "recommend": true,
          "response": null,
          "body": "Let's get a yeehaw for some proper validation I do say so myself. 50 Characters at least well yeah I can do that",
          "date": "2022-08-31T00:00:00.000Z",
          "reviewer_name": "Ryan",
          "helpfulness": 3,
          "photos": []
      },
      {
          "review_id": 1276231,
          "rating": 5,
          "summary": "Really it is so good",
          "recommend": true,
          "response": null,
          "body": "The clothing rocks, it is just a fact",
          "date": "2022-08-26T00:00:00.000Z",
          "reviewer_name": "Ryan",
          "helpfulness": 41,
          "photos": [
              {
                  "id": 2455860,
                  "url": "https://i.imgur.com/EPHb3G6.jpeg"
              }
          ]
      },
      {
          "review_id": 1275329,
          "rating": 1,
          "summary": "this product stinks",
          "recommend": true,
          "response": null,
          "body": "I dont like it",
          "date": "2022-07-13T00:00:00.000Z",
          "reviewer_name": "anonymous cat",
          "helpfulness": 97,
          "photos": []
      },
      {
          "review_id": 1275306,
          "rating": 5,
          "summary": "asdf",
          "recommend": true,
          "response": null,
          "body": "this should change the review count, but its not showing up on the reviews ",
          "date": "2022-07-12T00:00:00.000Z",
          "reviewer_name": "joe",
          "helpfulness": 72,
          "photos": []
      },
      {
          "review_id": 1275308,
          "rating": 4,
          "summary": "yea reviewcount is going up",
          "recommend": true,
          "response": null,
          "body": "cool man cool",
          "date": "2022-07-12T00:00:00.000Z",
          "reviewer_name": "joe",
          "helpfulness": 13,
          "photos": []
      },
      {
          "review_id": 1274977,
          "rating": 3,
          "summary": "Meh Camo",
          "recommend": false,
          "response": null,
          "body": "It's super tight too",
          "date": "2022-06-01T00:00:00.000Z",
          "reviewer_name": "CamoDude",
          "helpfulness": 51,
          "photos": []
      }
  ]
}

const reviewsMetaMock = {
  "product_id": "37311",
  "ratings": {
      "1": "44",
      "2": "24",
      "3": "61",
      "4": "66",
      "5": "231"
  },
  "recommended": {
      "false": "75",
      "true": "351"
  },
  "characteristics": {
      "Fit": {
          "id": 125031,
          "value": "3.0909090909090909"
      },
      "Length": {
          "id": 125032,
          "value": "3.1774193548387097"
      },
      "Comfort": {
          "id": 125033,
          "value": "3.3010752688172043"
      },
      "Quality": {
          "id": 125034,
          "value": "3.3309090909090909"
      }
  }
}

module.exports = {
  reviewsMock: reviewsMock,
  reviewsMetaMock: reviewsMetaMock,
  firstProduct: firstProduct,
}