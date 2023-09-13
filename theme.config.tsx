import { useRouter } from 'next/router';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const phone = process.env.NEXT_PUBLIC_PHONE;
const resumeId = process.env.NEXT_PUBLIC_RESUME_ID;
const ogConfig = {
  titleTemplate: 'Hanna',
  description: 'Software Engineer / Frontend Developer using React Native, Next JS, Tailwind CSS in TypeScript',
};

const themeConfig: DocsThemeConfig = {
  logo: (
    <>
      <span className='hidden lg:block'>Hanna Tiara Andarlia</span>
      <span className='text-dark-theme dark:text-light-theme font-black lg:hidden'>H</span>
    </>
  ),
  search: {
    component: () => null,
    placeholder: 'Search projects...',
  },
  navbar: {
    extraContent: (
      <div className='gap-4 flex items-center'>
        <a
          className='hidden md:block'
          href='https://github.com/hannatiaraaa'
          target='_blank'
        >
          <i className='fa-brands fa-github text-socialMedia-github-light dark:text-socialMedia-github-dark text-2xl'></i>
        </a>
        <a
          className='block lg:hidden'
          href={`https://api.whatsapp.com/send/?phone=${phone}&text&type=phone_number&app_absent=0`}
          target='_blank'
        >
          <i className='fa-brands fa-whatsapp text-socialMedia-whatsapp text-3xl'></i>
        </a>
        <a
          target='_blank'
          className='px-4 py-2 gap-1 lg:gap-8 flex justify-between items-center inset-0 rounded-lg border-2 border-light-theme dark:border-dark-theme hover:border-transparent bg-sky-50/80 hover:bg-light-theme dark:bg-gray-950/80 dark:hover:bg-dark-theme transition duration-300 hover:duration-75 hover:scale-95'
          href={`https://drive.google.com/uc?export=download&id=${resumeId}`}
        >
          <p className='font-medium flex gap-1'>
            CV <span className='hidden lg:block'>/ Resume</span>
          </p>
          <i className='fa-solid fa-download text-dark-theme dark:text-light-theme'></i>
        </a>
      </div>
    ),
  },
  head: () => {
    const { titleTemplate, description } = ogConfig;

    return (
      <>
        <meta
          httpEquiv='Content-Language'
          content='en'
        />
        <meta
          name='description'
          content={description}
        />
        <meta
          name='og:description'
          content={description}
        />
        <meta
          name='og:title'
          content={titleTemplate}
        />
        <meta
          name='apple-mobile-web-app-title '
          content={titleTemplate}
        />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (['/'].includes(asPath)) {
      return ogConfig;
    }

    return { ...ogConfig, titleTemplate: `${ogConfig.titleTemplate}'s %s` };
  },
  gitTimestamp: undefined,
  footer: {
    text: () => (
      <span>
        {new Date().getFullYear()} © Hanna Tiara Andarlia | Template:{' '}
        <a
          href='https://nextra.site'
          target='_blank'
        >
          Nextra
        </a>
        , MIT License.
      </span>
    ),
  },
};

export default themeConfig;
