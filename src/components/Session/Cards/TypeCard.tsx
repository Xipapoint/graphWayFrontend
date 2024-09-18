import React, { useEffect } from 'react'
import { SessionApi } from '../../../api/sessionApi'
import useErrorToast from '../../../shared/hooks/errorToast';

const TypeCard = () => {
  const {handleError} = useErrorToast()
  const sessionApi = new SessionApi();
  const { data: sessionTypes, error, isError } = sessionApi.getSessionTypes()
  useEffect(() => {
    if (isError) {
      handleError(error);
    }
  }, [error, isError, handleError]);
  return (
    <div>
      {sessionTypes?.map(sessionType => (
        <div key={sessionType.sessionTypeName}>
          {sessionType.sessionTypeName}
        </div>
      ))}
    </div>
  )
}

export default TypeCard
