/* This example requires Tailwind CSS v2.0+ */
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import _map from 'lodash/map'
import { NavLink } from 'react-router-dom'

const Pagination = ({
  count, currentPage, nextPage, prevPage,
}) => {
  return (
    <nav className='border-t border-gray-200 px-4 sm:px-0'>
      {
        _map(count, (item) => (
          <div className='flex items-center justify-between' key={item}>
            {
              item === 0 && (
                <div className='-mt-px w-0 flex-1 flex'>
                  <NavLink
                    to='#'
                    className='border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  >
                    <ArrowNarrowLeftIcon className='mr-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                    Previous
                  </NavLink>
                </div>
              )
            }
            <div className='hidden md:-mt-px md:flex'>
              <NavLink
                to='#'
                className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
              >
                1
              </NavLink>
              {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
              <NavLink
                to='#'
                className='border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                aria-current='page'
              >
                2
              </NavLink>
            </div>
            { item === 0
                && (
                <div className='-mt-px w-0 flex-1 flex justify-end'>
                  <NavLink
                    to='#'
                    className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  >
                    Next
                    <ArrowNarrowRightIcon className='ml-3 h-5 w-5 text-gray-400' aria-hidden='true' />
                  </NavLink>
                </div>
                )}

          </div>
        ))
      }
    </nav>
  )
}

export default Pagination
