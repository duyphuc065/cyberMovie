import * as _ from 'lodash';
import { MESSAGE } from './Constants';


export const isSignUp = (message) => {
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

  export const isBlank = (data:any)=>{
    if(_.isUndefined(data)){
      return true;
    }
    if(_.isNull(data)){
      return true;
    }
    if(_.isEmpty(data)){
      return true;
    }
    return false;
  }
