
export const serviceType = {
  name: 'zabieg',
  title: 'Zabieg',
  type: 'document',
  fields: [
    {
      name: 'nazwa',
      title: 'Nazwa',
      type: 'string',

    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},

    },
    {
      name: 'klasa',
      type: 'reference',
      to: [{type: 'klasa'}],
    },
    {
      name: 'krotkiOpis',
      type: 'text',
      validation: (rule: any) => rule.max(200).warning('Maksymalnie 200 znaków. Opis ma być krótki :)')
    },
    {
      name: 'dlugiOpis',
      type: 'text',
    },
    {
      name: 'galeriaZdjec',
      title: 'Galeria Zdjęć',
      type: 'array',
      of: [{ type: 'image' }]
    },
  ],
}