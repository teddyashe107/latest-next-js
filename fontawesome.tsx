import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);

interface IconProps {
  icon: any;
  className?: string;
}

export default function Icon({ icon, className }: IconProps) {
  return <FontAwesomeIcon icon={icon} className={className} />;
}
