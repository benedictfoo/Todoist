import validateTitle from "./validateTitle";
import validateDescription from "./validateDescription";
import validateDate from "./validateDate";

export default function ({title, description, date}) {

    const validatedFields = {}

    if (!validateTitle(title)) {
        return false
    } else {
        validatedFields.title = title
    }
    if (description) {
        if (!validateDescription(description)) {
            return false;
        } else {
            validatedFields.description = description
        }
    }
    if (date) {
        if (!validateDate(date)) {
            return false
        } else {
            validatedFields.due_date = date;
        }
    }
    return validatedFields;
}