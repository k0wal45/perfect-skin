
export const serviceType = {
  name: 'zabieg',
  title: 'Zabieg',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',

    },
    {
      name: 'typeOfService',
      title: 'Klasa',
      type: 'reference',
      to: [{type: 'klasa'}],
    },
    {
      name: 'excerpt',
      title: 'Krótki Opis',
      type: 'text',
      validation: (rule: any) => rule.max(400).warning('Maksymalnie 400 znaków. Opis ma być krótki :)')
    },
    {
      name: 'description',
      title: 'Długi Opis',
      type: 'text',
    },
    {
      name: 'cost',
      title: 'Koszt Zabiegu (mogą być widełki np. 300 - 500)',
      type: 'string',
    },
    {
      name: 'galery',
      title: 'Galeria Zdjęć',
      type: 'array',
      of: [{ type: 'image' }]
    },
  ],
}