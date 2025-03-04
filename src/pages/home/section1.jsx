import { useEffect, useRef } from 'react';
import './section1.css';
import ArrowSvg from '../../assets/images/arrow.svg';
import FilledButton from '../../components/buttons/FilledButton';
import OutlinedButton from '../../components/buttons/OutlinedButton';

const SectionOne = () => {
  const scrollListRef = useRef(null);

  useEffect(() => {
    const scrollList = scrollListRef.current;
    if (!scrollList) return;

    const items = Array.from(scrollList.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      scrollList.appendChild(clone);
    });
  }, []);

  return (
    <>
      <div className="auto-scroll-body">
        <div className="container">
          <h1>
            Tokenize
            <img className="scroll-arrow" src={ArrowSvg} />
          </h1>
          <div className="scroll-window">
            <div className="fade top-fade"></div>
            <div className="fade bottom-fade"></div>
            <ul className="scroll-list" ref={scrollListRef}>
              <li style={{ '--clr': 'var(--clr-slide-1)' }}>Clothes</li>
              <li style={{ '--clr': 'var(--clr-slide-2)' }}>Devices</li>
              <li style={{ '--clr': 'var(--clr-slide-3)' }}>Content</li>
              <li style={{ '--clr': 'var(--clr-slide-4)' }}>Feelings</li>
              <li style={{ '--clr': 'var(--clr-slide-5)' }}>Commodities</li>
              <li style={{ '--clr': 'var(--clr-slide-6)' }}>Products</li>
              <li style={{ '--clr': 'var(--clr-slide-7)' }}>Skills</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="section2-two">
        <p className="heading">Create a digital twin of your Asset</p>
        <div className="flex gap-5 w-full justify-center align-middle">
          <FilledButton text={'Consult'} />
          <OutlinedButton text={'Collaborate'} />
          <FilledButton text={'Create'} />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
