class Pratos {
  image: string;
  title: string;
  description: string;
  id: number;
  infos: string[];
  note: number;
  icon: string;

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    description: string,
    note: number,
    icon: string
  ) {
    this.id = id;
    this.image = image;
    this.infos = infos;
    this.title = title;
    this.description = description;
    this.note = note;
    this.icon = icon;
  }
}
export default Pratos;
