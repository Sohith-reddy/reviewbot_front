import { CheckIcon } from '@heroicons/react/20/solid'
import GradientBackground from './GradientBackground'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$29',
    description: 'Perfect for startups and small development teams.',
    features: [
      'Up to 5 team members',
      'Basic code review automation',
      'Standard response time',
      '100 reviews per month',
      'Email support',
      'Basic analytics dashboard',
      'Integration with GitHub',
      'Security scanning'
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    priceMonthly: '$79',
    description: 'Ideal for growing businesses and medium-sized teams.',
    features: [
      'Up to 15 team members',
      'Advanced code review automation',
      'Priority response time',
      'Unlimited reviews',
      'Priority email & chat support',
      'Advanced analytics & reporting',
      'Integration with GitHub & GitLab',
      'Enhanced security features',
      'Custom rule configuration',
      'API access'
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Custom',
    description: 'Tailored solutions for large organizations and enterprises.',
    features: [
      'Unlimited team members',
      'Enterprise-grade automation',
      '24/7 dedicated support',
      'Unlimited reviews & features',
      'Dedicated account manager',
      'Custom analytics & reporting',
      'Integration with any VCS',
      'Advanced security compliance',
      'Custom workflow automation',
      'On-premise deployment option',
      'SLA guarantees',
      'Training & onboarding'
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <GradientBackground>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Choose the right plan for your team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline your decision-making with our intelligent product review. Select a plan that scales with your needs.
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                  'rounded-3xl p-8 xl:p-10'
                )}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-indigo-600' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.featured && (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  {tier.name !== 'Enterprise' && <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                      : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  )}
                >
                  {tier.name === 'Enterprise' ? 'Contact sales' : 'Get started today'}
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-base font-semibold leading-7 text-gray-900">
              Need a custom solution?
            </p>
            <p className="mt-2 text-sm leading-8 text-gray-600">
              Contact our sales team for enterprise-grade solutions tailored to your specific requirements.
              <br />
              We offer flexible pricing and custom features for large teams and organizations.
            </p>
          </div>
        </div>
      </div>
    </GradientBackground>
  )
}