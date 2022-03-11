import IconFacebook from '~/components/ui/icons/facebook';
import IconInstagram from '~/components/ui/icons/instagram';
import IconTwitter from '~/components/ui/icons/twitter';

export default function Footer() {
  return (
    <footer className="rt-footer">
      <div className="logo">
        MODERN <br /> ART GALLERY
      </div>
      <p className="description">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className="social-links">
        <IconFacebook />
        <IconInstagram />
        <IconTwitter />
      </div>
    </footer>
  );
}
