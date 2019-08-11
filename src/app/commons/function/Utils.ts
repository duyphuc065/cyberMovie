module Utils {
  export function isSIGN_UP(message) {
    switch (message) {
      case MESSAGE.DATA.ACCOUNT_ALREADY_EXISTS:
        return false;
      case MESSAGE.DATA.EMAIL_ALREADY_EXISTS:
        return false;
      case MESSAGE.DATA.GROUPID_NOT_MATCH_RULE:
        return false;
      default:
        return true;
    }
  }
}
