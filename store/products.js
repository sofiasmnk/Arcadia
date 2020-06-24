export const state = () => ({
  list: [
    {
      id: '1',
      name: 'Tonificante facial de gerânio',
      price: 10.0,
      type: 'Rosto',
      pinned: true
    },
    {
      id: '2',
      name: 'Hidratante de babosa',
      price: 55.0,
      type: 'Rosto',
      pinned: true
    },
    {
      id: '3',
      name: 'Esfoliante de pepino',
      price: 20.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '4',
      name: 'Máscara de canela',
      price: 50.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '5',
      name: 'Esfoliante de camomila',
      price: 20.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '6',
      name: 'Esfoliante de banana',
      price: 20.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '7',
      name: 'Máscara de morango',
      price: 60.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '8',
      name: 'Tonificante facial de vinagre',
      price: 20.0,
      type: 'Rosto',
      pinned: false
    },
    {
      id: '9',
      name: 'Sabonete de manga',
      price: 10.0,
      type: 'Corpo',
      pinned: true
    },
    {
      id: '10',
      name: 'Sabonete de lavanda',
      price: 10.0,
      type: 'Corpo',
      pinned: true
    },
    {
      id: '11',
      name: 'Manteiga corporal de chá verde',
      price: 75.0,
      type: 'Corpo',
      pinned: true
    },
    {
      id: '12',
      name: 'Manteiga corporal de rosas',
      price: 90.0,
      type: 'Corpo',
      pinned: false
    },
    {
      id: '13',
      name: 'Desodorante de lavanda',
      price: 15.0,
      type: 'Corpo',
      pinned: false
    },
    {
      id: '14',
      name: 'Shampoo sólido de hortência',
      price: 25.0,
      type: 'Cabelo',
      pinned: true
    },
    {
      id: '15',
      name: 'Shampoo sólido de linhaça',
      price: 25.0,
      type: 'Cabelo',
      pinned: true
    },
    {
      id: '16',
      name: 'Condicionador de gengibre',
      price: 30.0,
      type: 'Cabelo',
      pinned: false
    },
    {
      id: '17',
      name: 'Condicionador de lavanda',
      price: 30.0,
      type: 'Cabelo',
      pinned: false
    },
    {
      id: '18',
      name: 'Máscara capilar de côco',
      price: 40.0,
      type: 'Cabelo',
      pinned: false
    }
  ]
})

export const getters = {
  getByType: (state) => (type) => {
    return state.list.filter((product) => product.type === type)
  },
  getById: (state) => (id) => {
    return state.list.find((product) => product.id === id)
  },
  getPinned: (state) => {
    return state.list.filter((product) => product.pinned)
  }
}
