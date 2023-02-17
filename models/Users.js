import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: false,
    },
    // profile: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Profile",
    // },
  }
);

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: false,
    default: "",
  },
  lastName: {
    type: String,
    require: false,
    default: "",
  },
  mailAddress: {
    type: String,
    default: null,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  avatar: {
    type: String,
    default: "",
  },
});

const RestaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        require: true,
        default : "",
    },
    restaurantCategory: {
        type: [String],
        enum: ["meat", "Pizze", "vegan"],
        default: "meat",
    },
    restaurantDate: {
        type: Date,
        require: 'Please fill from date'
    }
});

// const Attractions = new mongoose.Schema({
//     attractionsName: {
//         type: String,
//         require: true,
//         default: ''
//     },
//     attractionsCategory: {
//         type: [String],
//         enum: ["hiking", "beach", "pool", "extreme"],
//         require: "please fill from enum"
//     },
//     attractionsPrice: {
//         type: Number,
//         default: 0
//     },
//     date: {
//         type: Date,
//         require: "Please fill from date"
//     }
// })

const Location = new mongoose.Schema({
  country: {
    type: String,
    enum: ["Israel", "Filand"],
    default: "",
  },
  city: {
    type: String,
    enum: [],
    default: "",
  },
  address: {
    type: String,
    default: "",
    require: true,
  },
});

// const Hotel = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     rating: {
//         type: Number,
//         default: 3,
//         enum: [3, 4, 5]
//     },
//     pricePerNight: {
//         type: Number,
//         require: true,
//         default: 0,
//     },
//     servalNight: {
//         type: Number,
//         default: 1
//     },
//     startDate: {
//         type: Date,
//         require: 'Please fill from date'
//     },
//     untilDate: {
//         type: Date,
//         require: 'Please fill from date'
//     }
// })


export const UserModel = mongoose.model("Users", UserSchema)
// const Profile = mongoose.model("Profile", ProfileSchema);
// const User = mongoose.model("User", RestaurantSchema);
// const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
// export const models = { User, Profile, Restaurant };