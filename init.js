db = db.getSiblingDB("property_management")

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [ "_id","first_name", "last_name","bill_address" ],
      properties: {
        _id: {
          bsonType: "int",
          description: "must be a integer and is required"
        },
        first_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        last_name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        bill_address: {
          bsonType: "object",
          required: [ "street", "city", "state", "zip" ],
          properties: {
            suite: {
              bsonType: "string",
              description: "must be a string if the field exists"
            },
            street: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            city: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            state: {
              bsonType: "string",
              description: "must be a string and is required"
            },
            zip: {
              bsonType: "string",
              description: "must be a string and is reuired"
            }
          }
        },
      }
    }
  }
})

db.createCollection("asset")
db.createCollection("loan")
db.createCollection("payment")

db.customers.insertMany([
{
    _id: 11111,
    first_name: "Dinis", 
    last_name: "Conceicao",
    bill_address: {
      street: "56 Dukes St",
      city: "Kearny",
      state: "NJ",
      zip: "07032"
},
}, 
{
    _id: 11112,
    first_name: "Thomas", 
    last_name: "Smith",
    bill_address: {
      street: "343 Main RD",
      city: "Newark",
      state: "NJ",
      zip: "07015",
      suite : "suite 121" ,
  },
},  
  {
      _id: 11113,
      first_name: "Jane", 
      last_name: "Smith",
      bill_address: {
        street: "91 Kearny Ave",
        city: "Trenton",
        state: "NJ",
        zip: "06012"
  },
},
      {
        _id: 11114,
        first_name: "Olivia", 
        last_name: "Patel",
        bill_address: {
          street: "12 Hoyt Dr",
          city: "West Orange",
          state: "NJ",
          zip: "06034"
        },
      },
    ])
    


db.asset.insertMany([
  { 
    _id: 11112,
    customer_id:1112,
    asset_street_address: "56 Duke ST",
    asset_suite: "",
    asset_city: "Kearny",
    asset_state: "NJ", 
    asset_zipcode: "07032", 
    },

  {
    _id: 11113,
    customer_id:1113,
    asset_street_address: "343 Main Rd",
    asset_suite: "suite 231",
    asset_city: "Newark",
    asset_state: "NJ", 
    asset_zipcode: "07105", 
    },

    {
      _id: 11114,
      customer_id:1114,
      asset_street_address: "1123 River ST",
      asset_suite: "",
      asset_city: "Nutley",
      asset_state: "NJ", 
      asset_zipcode: "07223", 
      },
   
    {
      _id: 11115,
      customer_id:1115,
      asset_street_address: "2211 Riverside ST",
      asset_suite: "",
      asset_city: "Kearny",
      asset_state: "NJ", 
      asset_zipcode: "07032", 
    },
  ])

db.loan.insertMany([
  {
    _id: 1111115, 
    asset_id: 11112,
    purchase_price: 350000.00, 
    loan_amount: 100500.00,
    loan_term: 60, 
    interest_rate: 8
    },

    {
      _id: 1111116, 
      asset_id: 11113,
      purchase_price: 450000.00, 
      loan_amount: 325000.00,
      loan_term: 60, 
      interest_rate: 8
      },
 
      {
        _id: 1111117, 
        asset_id: 11114,
        purchase_price: 450000.00, 
        loan_amount: 325000.00,
        loan_term: 120, 
        interest_rate: 4
        },
        {
          _id: 111111, 
          asset_id: 11115,
          purchase_price: 450000.00, 
          loan_amount: 325000.00,
          loan_term: 90, 
          interest_rate: 7
          },
])

db.payment.insertMany([
  {
    id: 111111112,
    loan_id: 1111115,
    payment_type: "credit", 
    payment_amount: 900.35
    },

    {
      id: 111111113,
      loan_id: 1111116,
      payment_type: "cash", 
      payment_amount: 1200.12
      },
  {
    id: 111111114,
    loan_id: 1111117,
    payment_type: "credit", 
    payment_amount: 880.25
    },

    {
      id: 111111115,
      loan_id: 1111118,
      payment_type: "credit", 
      payment_amount: 1900.00
      },
])
