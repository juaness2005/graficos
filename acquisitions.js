const ctx = document.getElementById('myChart').getContext('2d');

const data = {
  labels: ['Roberta', 'Pedro', 'Ághata', 'Juan', 'Luan', 'Eloa'], // Agora há 6 rótulos
  datasets: [{
    label: 'Contando da menor data até a maior',
    data: [24.02, 28.04, 13.10, 12.11, 19.04, 4.01], // Valores para 6 colunas
    backgroundColor: [
      '#545454',
      '#444444',
      '#9F9F9F',
      '#242020',
      '#A49393',
      '#C8C8C8'
    ],
    borderWidth: 1,
    borderRadius: 20,
  }]
};

const config = {
  type: 'bar', // Tipo do gráfico
  data: data,
  options: {
    scales: {
  x: {
    max: 100
  },
  y: {
    max: 50
  }
  }
    

  }
};

new Chart(ctx, config);
