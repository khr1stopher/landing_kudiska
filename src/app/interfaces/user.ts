export interface User {
    id: Number,
    firstname: String,
    lastname: String,
    years_old: Number,
    phone: DoubleRange,
    confirmed?: Boolean,
    email: String,
    password: String,
    time_create?: String
}
