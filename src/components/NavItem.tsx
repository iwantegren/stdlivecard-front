interface NavItemsProps {
  index: number;
  text: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  itemChanged: (index: number) => void;
}

function NavItem(props: NavItemsProps) {
  return (
    <li className="nav-item">
      <a
        className={
          "nav-link" +
          (props.active ? " active" : "") +
          (props.disabled ? " disabled" : "")
        }
        href={props.href}
        aria-disabled={props.disabled}
        onClick={() => {
          props.itemChanged(props.index);
          console.log(props.text);
        }}
      >
        {props.text}
      </a>
    </li>
  );
}

export default NavItem;
