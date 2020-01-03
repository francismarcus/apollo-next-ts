import { useApolloClient } from "@apollo/react-hooks";

const client = useApolloClient();
export function writeTokenToClient(token: string) {
  return client.writeData({
    data: {
      myToken: token
    }
  });
}


