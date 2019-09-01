import * as _ from 'lodash';

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