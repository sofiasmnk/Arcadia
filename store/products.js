export const state = () => ({
  list: [
    {
      id: '1',
      name: 'Tonificante facial de gerânio',
      img: '',
      price: 'R$10,00',
      type: 'Rosto',
      pinned: true
    },
    {
      id: '2',
      name: 'Hidratante de babosa',
      img: '',
      price: 'R$55,00',
      type: 'Rosto',
      pinned: true
    },
    {
      id: '3',
      name: 'Esfoliante de pepino',
      img: '',
      price: 'R$20,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '4',
      name: 'Máscara de canela',
      img: '',
      price: 'R$50,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '5',
      name: 'Esfoliante de camomila',
      img: '',
      price: 'R$20,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '6',
      name: 'Esfoliante de banana',
      img: '',
      price: 'R$20,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '7',
      name: 'Máscara de morango',
      img: '',
      price: 'R$60,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '8',
      name: 'Tonificante facial de vinagre',
      img: '',
      price: 'R$20,00',
      type: 'Rosto',
      pinned: false
    },
    {
      id: '9',
      name: 'Sabonete de manga',
      img: '',
      price: 'R$10,00',
      type: 'Corpo',
      pinned: true
    },
    {
      id: '10',
      name: 'Sabonete de lavanda',
      img: '',
      price: 'R$10,00',
      type: 'Corpo',
      pinned: true
    },
    {
      id: '11',
      name: 'Manteiga corporal de chá verde',
      img: '',
      price: 'R$75,00',
      type: 'Corpo',
      pinned: true
    },
    {
      id: '12',
      name: 'Manteiga corporal de rosas',
      img: '',
      price: 'R$90,00',
      type: 'Corpo',
      pinned: false
    },
    {
      id: '13',
      name: '',
      img: '',
      price: 'R$',
      type: 'Corpo',
      pinned: false
    },
    {
      id: '14',
      name: 'Shampoo sólido de hortência',
      img: '',
      price: 'R$25,00',
      type: 'Cabelo',
      pinned: true
    },
    {
      id: '15',
      name: 'Shampoo sólido de linhaça',
      img: '',
      price: 'R$25,00',
      type: 'Cabelo',
      pinned: true
    },
    {
      id: '16',
      name: 'Condicionador de gengibre',
      img: '',
      price: 'R$30,00',
      type: 'Cabelo',
      pinned: false
    },
    {
      id: '17',
      name: 'Condicionador de lavanda',
      img: '',
      price: 'R$30,00',
      type: 'Cabelo',
      pinned: false
    },
    {
      id: '18',
      name: '',
      img: '',
      price: 'R$',
      type: 'Cabelo',
      pinned: false
    }
  ]
})

export const getters = {
  getByType: (state) => (type) => {
    return state.list.filter((product) => product.type.equals(type))
  },
  getById: (state) => (id) => {
    return state.list.find((product) => product.id.equals(id))
  },
  getPinned: (state) => {
    return state.list.filter((product) => product.pinned)
  }
}
