import { useGetQuery } from "./Hooks/useGetQuery";

const Users = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useGetQuery(`users`, `getAll`, `users`);
  return (
    <div>
      {isLoading ? (
        <>
          <h1>Loading ...</h1>
        </>
      ) : (
        <></>
      )}

      {isError ? (
        <>
          <h1>Error while fetching data</h1>
        </>
      ) : (
        <></>
      )}
      {!isError && users && users.length ? (
        <>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <h2>{user.id}</h2>
                <h2>{user.name}</h2>
              </div>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Users;
