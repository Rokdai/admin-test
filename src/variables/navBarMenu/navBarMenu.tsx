import { nanoid } from "nanoid";

import { ReactComponent as Orders } from "../../assets/icon/orders.svg";
import { ReactComponent as Cargo } from "../../assets/icon/cargo.svg";
import { ReactComponent as Ports } from "../../assets/icon/ports.svg";
import { ReactComponent as Users } from "../../assets/icon/users.svg";
import { ReactComponent as Organisations } from "../../assets/icon/organisations.svg";
import { ReactComponent as Documents } from "../../assets/icon/documents.svg";
import { ReactComponent as Questions } from "../../assets/icon/questions.svg";
import { ReactComponent as Confidentiality } from "../../assets/icon/confidentiality.svg";
import { ReactComponent as History } from "../../assets/icon/history.svg";
import { IMenuItem } from "../../types/menuItem/menuItem";

export const menuItems: IMenuItem[] = [
  {
    id: nanoid(),
    label: "Все заказы",
    Icon: Orders,
    render: "products",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Все грузы",
    Icon: Cargo,
    render: "products",
    href: "/cargo",
  },
  {
    id: nanoid(),
    label: "Порты",
    Icon: Ports,
    render: "products",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Пользователи",
    Icon: Users,
    render: "products",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Все организации",
    Icon: Organisations,
    render: "all",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Все документы",
    Icon: Documents,
    render: "all",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Вопрос-ответ",
    Icon: Questions,
    render: "other",
    href: "/",
  },
  {
    id: nanoid(),
    label: "Политика конфиденциальности",
    Icon: Confidentiality,
    render: "other",
    href: "/",
  },
  {
    id: nanoid(),
    label: "История обновлений",
    Icon: History,
    render: "other",
    href: "/",
  },
];
