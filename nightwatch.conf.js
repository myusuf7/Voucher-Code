require('dotenv').config();

module.exports = {
    'src_folders': ['features'],
    'page_objects_path': ['features/page-objects'],

    'webdriver': {
        'start_process': true,
        'server_path': require('chromedriver').path,
        'port': 9515
    },

    'test_settings': {
        'default': {
            'screenshots': {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            },
            'desiredCapabilities': {
                'browserName': 'chrome',
                'chromeOptions': {
                    
                }
            }
        }
    },
    selenium_server: {
        // Selenium Server is running locally and is managed by Nightwatch
        // Install the NPM package @nightwatch/selenium-server 
        //  or download the selenium server jar file from https://github.com/SeleniumHQ/selenium/releases/
        selenium: {
          start_process: true,
          port: 4444,
          server_path: '', // Leave empty if @nightwatch/selenium-server is installed
          command: 'standalone', // Selenium 4 only
          cli_args: {
            // Configure the paths to individual drivers below:
            //
            // 'webdriver.gecko.driver': '',
             'webdriver.chrome.driver': 'node_modules\.bin\chromedriver'
            // 'webdriver.edge.driver': ''
          }
        },
        webdriver: {
          start_process: false,
          default_path_prefix: '/wd/hub'
        }
      }



};


