export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f745ad130d34f8926371856',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mvhn6n4u',
                  apiId: 'e1a9c96d-2924-4a02-a217-cce187d2ba6c'
                },
                {
                  buildHookId: '5f745ad1ff011e7f77565b18',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-x5xqf8a7',
                  apiId: '4565422c-340c-45a1-8629-096111fde856'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flakessp/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-x5xqf8a7.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
