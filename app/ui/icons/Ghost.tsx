import React from 'react'
import cx from 'clsx'

const Ghost = ({ theme, className }: { theme: 'dark' | 'light'; className?: string }): JSX.Element => {
  const cn = cx(className, {
    'fill-white': theme === 'dark',
    'fill-slate-800': theme === 'light',
  })

  return (
    <svg className={className} viewBox='0 0 671.98 288'>
      <title>Ghost</title>
      <g opacity='0.7'>
        <rect x='112.197' y='168.302' className={cn} width='31.703' height='15.852' />
        <rect x='159.75' y='168.302' className={cn} width='31.683' height='15.852' />
        <rect x='112.173' y='136.599' className={cn} width='79.27' height='15.852' />
        <rect x='112.197' y='104.898' className={cn} width='47.559' height='15.851' />
        <rect x='175.602' y='104.898' className={cn} width='15.851' height='15.851' />
      </g>
      <g>
        <path
          className={cn}
          d='M421.575,104.807c-25.458,0-38.606,18.003-38.606,40.211c0,22.209,12.824,40.214,38.606,40.214     s38.606-18.005,38.606-40.214C460.182,122.81,447.032,104.807,421.575,104.807z M440.835,145.09L440.835,145.09     c-0.018,14.281-4.83,25.848-19.26,25.848s-19.243-11.566-19.258-25.848l0,0c0-0.012,0-0.023,0-0.035s0-0.023,0-0.036l0,0     c0.015-14.28,4.829-25.846,19.259-25.846c14.429,0,19.241,11.566,19.259,25.846l0,0c0,0.013,0,0.024,0,0.036     S440.835,145.078,440.835,145.09z'
        />
        <path
          className={cn}
          d='M307.584,184.153V72.975c0,0,14.664-2.083,15.801-2.236c1.288-0.174,2.998,0.743,2.998,2.556     c0,1.985,0,41.214,0,41.214c3.043-2.893,6.394-5.225,10.046-7.002c3.655-1.775,7.941-2.664,12.865-2.664     c4.263,0,8.04,0.723,11.338,2.17c3.3,1.444,6.053,3.476,8.26,6.087c2.207,2.615,3.882,5.735,5.024,9.363     c1.141,3.628,1.712,7.624,1.712,11.988v49.701h-18.8v-49.701c0-4.769-1.104-8.461-3.311-11.076     c-2.208-2.612-5.519-3.919-9.935-3.919c-3.247,0-6.29,0.736-9.13,2.209c-2.843,1.472-5.532,3.474-8.069,6.013v56.475H307.584z'
        />
        <path
          className={cn}
          d='M558.565,185.224c-12.937,0-21.045-7.529-21.045-21.575v-41.628h-14.58c0,0,3.099-10.718,3.344-11.562     c0.246-0.843,0.887-1.749,2.174-1.928s9.044-1.261,9.044-1.261l3.583-22.794c0,0,10.527-1.484,12.196-1.733     c1.576-0.236,3.005,0.899,3.005,2.616c0,1.715,0,21.911,0,21.911h18.44v14.751h-18.44v41.067c0,5.607,3.414,7.75,6.686,7.75     c2,0,4.739-1.062,6.783-2.01c1.263-0.584,3.22-0.151,3.726,1.612c0.447,1.562,2.824,9.853,2.824,9.853     C574.254,181.617,567.771,185.224,558.565,185.224z'
        />
        <path
          className={cn}
          d='M512.609,122.267c-3.664-1.19-10.551-3.095-17.102-3.095c-6.675,0-11.927,2.306-11.927,7.856     c0,6.932,11.319,8.95,19.067,11.776c5.18,1.889,19.071,5.572,19.071,20.512c0,18.148-15.071,25.907-31.148,25.907     c-16.079,0-25.578-5.98-25.578-5.98s2.494-8.81,2.999-10.549c0.457-1.565,2.276-2.114,3.435-1.669     c4.138,1.595,11.61,3.812,20.056,3.812c8.551,0,12.688-2.611,12.688-8.177c0-7.408-11.547-9.672-19.184-12.081     c-5.261-1.658-19.186-5.525-19.186-21.956c0-16.186,14.213-23.78,29.403-23.78c12.858,0,19.165,2.689,23.876,5.089     c0,0-2.625,9.149-3.015,10.512C515.604,122.064,514.275,122.807,512.609,122.267z'
        />
        <path
          className={cn}
          d='M300.245,107.523c0-1.751-1.496-2.753-2.923-2.59c-6.309,0.723-10.81,3.692-13.722,6.456     c-5.718-4.48-13.655-6.619-22.563-6.619c-17.86,0-31.814,8.62-31.814,27.416c0,10.79,4.593,18.225,11.887,22.602     c-5.417,2.564-9.025,8.005-9.025,13.354c0,8.948,7.069,11.75,7.069,11.75s-12.36,5.999-12.36,18.001     c0,15.364,14.139,21.576,31.416,21.576c24.904,0,42.038-10.286,42.038-29.173c0-11.624-8.895-18.041-28.279-18.804     c-11.503-0.454-18.954-0.868-20.8-1.479c-2.439-0.81-3.638-2.763-3.638-4.919c0-2.38,1.955-4.646,5.037-6.202     c2.688,0.476,5.525,0.711,8.471,0.711c17.875,0,31.815-8.595,31.815-27.416c0-4.564-0.824-8.526-2.322-11.911     c2.626-1.401,5.857-2.387,9.715-2.387C300.245,117.889,300.245,109.12,300.245,107.523z M251.026,184.25     c0,0,9.379,0.355,18.751,0.789c10.529,0.487,13.81,2.756,13.81,8.208c0,6.661-9.15,13.14-21.937,13.14     c-12.138,0-18.201-4.223-18.201-11.254C243.449,191.099,245.579,186.586,251.026,184.25z M261.071,146.483     c-8.461,0-15.062-4.494-15.062-14.297c0-9.804,6.607-14.298,15.062-14.298c8.456,0,15.062,4.482,15.062,14.298     S269.535,146.483,261.071,146.483z'
        />
      </g>
    </svg>
  )
}

export default Ghost
