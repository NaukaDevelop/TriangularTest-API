import { HttpException, HttpStatus } from '@nestjs/common';
import { localMariaDb } from 'src/connectors/local-mariadb.pool';
import { sqlLikeFilter } from 'src/shared/helper/sql.helper';
import { StoreInfoFullDTO } from '../store-info.dto';

export async function storeInfoFindByFilterFunction(data: StoreInfoFullDTO) {
  let cnn;
  const query = `
  SELECT 
  *
  FROM StoreInfo
  WHERE 1

  -- storeInfoId
  ${sqlLikeFilter(data.storeInfoId, 'storeInfoId')}
  
  -- storeInfoSts
  ${sqlLikeFilter(data.storeInfoSts, 'storeInfoSts')}
  
  -- storeInfoChk
  ${sqlLikeFilter(data.storeInfoChk, 'storeInfoChk')}
  
  -- storeInfoCreated
  ${sqlLikeFilter(data.storeInfoCreated, 'storeInfoCreated')} 
  
  -- storeInfoUpdated
  ${sqlLikeFilter(data.storeInfoUpdated, 'storeInfoUpdated')}
  
  -- storeInfoNumber
  ${sqlLikeFilter(data.storeInfoNumber, 'storeInfoNumber')}
  
  -- storeInfoName
  ${sqlLikeFilter(data.storeInfoName, 'storeInfoName')}

  -- storeInfoType
  ${sqlLikeFilter(data.storeInfoType, 'storeInfoType')}

  -- storeInfoAddress1
  ${sqlLikeFilter(data.storeInfoAddress1, 'storeInfoAddress1')}

  -- storeInfoCity
  ${sqlLikeFilter(data.storeInfoCity, 'storeInfoCity')}

  -- storeInfoState
  ${sqlLikeFilter(data.storeInfoState, 'storeInfoState')}

  -- storeInfoArea
  ${sqlLikeFilter(data.storeInfoArea, 'storeInfoArea')}

  -- storeInfoZip
  ${sqlLikeFilter(data.storeInfoZip, 'storeInfoZip')}

  -- storeInfoCountry
  ${sqlLikeFilter(data.storeInfoCountry, 'storeInfoCountry')}

  -- storeInfoCounty
  ${sqlLikeFilter(data.storeInfoCounty, 'storeInfoCounty')}

  -- storeInfoLocale
  ${sqlLikeFilter(data.storeInfoLocale, 'storeInfoLocale')}

  -- storeInfoCurrencyId
  ${sqlLikeFilter(data.storeInfoCurrencyId, 'storeInfoCurrencyId')}

  -- storeInfoLatitude
  ${sqlLikeFilter(data.storeInfoLatitude, 'storeInfoLatitude')}

  -- storeInfoLongitude
  ${sqlLikeFilter(data.storeInfoLongitude, 'storeInfoLongitude')}

  -- storeInfoPhone
  ${sqlLikeFilter(data.storeInfoPhone, 'storeInfoPhone')}

  -- storeInfoDescription
  ${sqlLikeFilter(data.storeInfoDescription, 'storeInfoDescription')}

  -- storeInfoManager
  ${sqlLikeFilter(data.storeInfoManager, 'storeInfoManager')}

  -- storeInfoEmail
  ${sqlLikeFilter(data.storeInfoEmail, 'storeInfoEmail')}

  -- storeInfoTax
  ${sqlLikeFilter(data.storeInfoTax, 'storeInfoTax')}

  -- storeInfoLocType
  ${sqlLikeFilter(data.storeInfoLocType, 'storeInfoLocType')}

  `;

  try {
    cnn = await localMariaDb();
    const preResult = await cnn.query(query);
    const result = preResult[0];
    return result;
  } catch (error) {
    const message =
      'Ha ocurrido un error en storeInfoFindByFilterFunction: ' +
      (error.message || error.name);
    throw new HttpException(message, HttpStatus.INTERNAL_SERVER_ERROR);
  } finally {
    if (cnn) {
      try {
        // Connections should always be released when not needed
        await cnn.end();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
