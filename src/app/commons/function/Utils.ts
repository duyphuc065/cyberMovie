import { MESSAGE } from "../message/Message";

export module Utils {
export const isSIGN_UP = (message) => {
    switch (message) {
      case MESSAGE.ACCOUNT_ALREADY_EXISTS:
        return false;
      case MESSAGE.EMAIL_ALREADY_EXISTS:
        return false;
      case MESSAGE.GROUPID_NOT_MATCH_RULE:
        return false;
      default:
        return true;
    }
  }
}
