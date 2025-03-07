import { useEffect, useRef } from 'react';
import './section1.css';
import ArrowSvg from '../../assets/images/arrow.svg';
import FilledButton from '../../components/buttons/FilledButton';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import { CheckCircle, Briefcase, Zap } from 'lucide-react';

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
      <div className="bg-gray-50 flex items-center justify-center p-8">
        <div className="max-w-7xl w-full">
          <div className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
              {/* Team Collaborations */}
              <div className="text-center space-y-4">
                <div className="flex justify-center h-[64px] items-center -space-x-2 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Team member"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <h2 className="relative z-10 w-fit mx-auto mb-4 bg-white text-4xl font-bold text-gray-900">
                  300K+
                </h2>
                <p className="text-xl text-gray-600">Team Collaborations</p>
              </div>

              {/* Tasks Completed */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="relative z-10 w-fit mx-auto mb-4 bg-white text-4xl font-bold text-gray-900">
                  500K+
                </h2>
                <p className="text-xl text-gray-600">Tasks Completed</p>
              </div>

              {/* Projects Managed */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h2 className="relative z-10 w-fit mx-auto mb-4 bg-white text-4xl font-bold text-gray-900">
                  15M+
                </h2>
                <p className="text-xl text-gray-600">Projects Managed</p>
              </div>

              {/* Successful Integrations */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="relative z-10 w-fit mx-auto mb-4 bg-white text-4xl font-bold text-gray-900">
                  150K+
                </h2>
                <p className="text-xl text-gray-600">Successful Integrations</p>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute top-27 left-0 right-0 hidden md:block">
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-gray-200 rounded-full transform -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-200 rounded-full transform -translate-y-1/2" />
              <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-gray-200 rounded-full transform -translate-y-1/2" />
            </div>
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
