import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  // PONTO DE ATENÇAO.

  //Com essse codigo, caso uma consulta retorne erro, nao ha mapeamento pro erro
  // Isso faz com que a conexao fique aberta em caso de erro

  //REFATORACAO

  try {
    await client.connect();
    const result = await client.query(queryObject);

    return result;
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

export default {
  query: query,
};
