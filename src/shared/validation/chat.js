import _ from "lodash";
import { Validator } from "../validator";

export let MESSAGE_TYPES = ["normal"];

export function validateSendMessage(user, message, type) {
  const validator = new Validator();

  if (message.length > 70)
    validator.error("Message must be no more than 70 characters.");

  if (message.trim().length === 0)
    validator.error("Message cannot be empty.");

  if (!_.includes(MESSAGE_TYPES, type))
    validator.error(`Invalid message type ${type}.`);

  return validator;
}
