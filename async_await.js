// Async/await

api.get('/users/diego3g').then(function(user) {
  api.get('/repos/' + user.id).then(function(repos) => {
    repos.forEach(function(item, index) {
      console.log('Posição: ' + index + ': ' + item);
    });
  });
});

const search = async () => {
  try {
    const { id } = await api.get('/users/diego3g');
    const repos = await api.get(`/repos/${id}`);
    repos.map((item, index) => console.log(`Posição: ${index}: ${item}`));
  } catch (err) {
    console.log('Falha na execução da requisição!');
  }
}
