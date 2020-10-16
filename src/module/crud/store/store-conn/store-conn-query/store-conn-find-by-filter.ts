import { HttpException, HttpStatus } from '@nestjs/common';
import { localMariaDb } from 'src/connectors/local-mariadb.pool';
import { sqlLikeFilter } from 'src/shared/helper/sql.helper';
import { StoreConnFullDTO } from '../store-conn.dto';

export async function storeConnFindByFilterFunction(data: StoreConnFullDTO) {
  let cnn;
  const query = `
  SELECT 
  *
  FROM StoreConn
  WHERE 1

  -- storeConnId
  ${sqlLikeFilter(data.storeConnId, 'storeConnId')}
  
  -- storeConnSts
  ${sqlLikeFilter(data.storeConnSts, 'storeConnSts')}
  
  -- storeConnChk
  ${sqlLikeFilter(data.storeConnChk, 'storeConnChk')}
  
  -- storeConnCreated
  ${sqlLikeFilter(data.storeConnCreated, 'storeConnCreated')} 
  
  -- storeConnUpdated
  ${sqlLikeFilter(data.storeConnUpdated, 'storeConnUpdated')}
  
  -- storeConnStoreId
  ${sqlLikeFilter(data.storeConnStoreId, 'storeConnStoreId')}
  
  -- storeConnName
  ${sqlLikeFilter(data.storeConnName, 'storeConnName')}

  -- storeConnIpAddress
  ${sqlLikeFilter(data.storeConnIpAddress, 'storeConnIpAddress')}

  -- storeConnUser
  ${sqlLikeFilter(data.storeConnUser, 'storeConnUser')}

  -- storeConnPassword
  ${sqlLikeFilter(data.storeConnPassword, 'storeConnPassword')}

  -- storeConnStoreDatabase
  ${sqlLikeFilter(data.storeConnStoreDatabase, 'storeConnStoreDatabase')}

  -- storeConnPort
  ${sqlLikeFilter(data.storeConnPort, 'storeConnPort')}

  `;

  try {
    cnn = await localMariaDb();
    const preResult = await cnn.query(query);
    const result = preResult[0];
    return result;
  } catch (error) {
    const message =
      'Ha ocurrido un error en holidayFindByFilterFunction: ' +
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
