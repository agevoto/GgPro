const SettingsTemplate = {props: [], 
                          data: () => ({
        radio: false,
        active: false,
        value: null,
        primary: [
                  'Orange',
                  'Apple',
                  'Pineapple'
                ],
        accent: [
                  'Cat',
                  'Dog',
                  'Rabbit'
                ]
    }),
        methods: {
              onConfirm () {
                this.value = 'Agreed'
              },
              onCancel () {
                this.value = 'Disagreed'
              }
        },
        template:`

        <div>
            <div>
                 <md-tabs>
                  <md-tab id="tab-home" md-label="All" md-icon="view_compact">
                    <div>
                            <md-list>
                                <md-list-item md-expand>
                                    <md-icon>videogame_asset</md-icon>
                                    <span class="md-list-item-text">Games</span>

                                    <md-list slot="md-expand">
                                      <md-list-item class="md-inset">Console</md-list-item>
                                      <md-list-item class="md-inset">PC</md-list-item>
                                      <md-list-item class="md-inset">Phone</md-list-item>
                                    </md-list>
                                  </md-list-item>
                        </md-list>
                    </div>
                </md-tab>

                  <md-tab id="tab-pages" md-label="Action" md-icon="whatshot">

<template>
 

    <md-card>
      <md-card-media>
        <img src="/img/WD2.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>


 <md-card>
      <md-card-media>
        <img src="/img/lol.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>



 <md-card>
      <md-card-media>
        <img src="/img/hearthstone.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>




</template>

<style>
 
  .md-card-content {
    width: 320px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: top;
  }
</style>






                        <div>
                            <md-button class="md-icon-button">
                                <md-icon>home</md-icon>
                            </md-button>

                            <md-button class="md-icon-button md-accent">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                        </div>
                        <div>
                            <md-radio v-model="radio" :value="false">Boolean</md-radio>
                            <md-radio v-model="radio" value="my-radio">String</md-radio>
                            <md-radio v-model="radio">No Value</md-radio>
                            <md-radio v-model="radio" disabled>Disabled</md-radio>

                            <small>Model value: {{ radio }}</small>
                        </div>
                    </md-tab>

 <md-tab id="tab-nature" md-label="Nature" md-icon="filter_vintage">

<template>
 

    <md-card>
      <md-card-media>
        <img src="/img/WD2.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>


 <md-card>
      <md-card-media>
        <img src="/img/lol.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>



 <md-card>
      <md-card-media>
        <img src="/img/hearthstone.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>




</template>

<style>
 



  .md-card-content {
    width: 320px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: top;
  }
</style>






                        <div>
                            <md-button class="md-icon-button">
                                <md-icon>home</md-icon>
                            </md-button>

                            <md-button class="md-icon-button md-accent">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                        </div>
                        <div>
                            <md-radio v-model="radio" :value="false">Boolean</md-radio>
                            <md-radio v-model="radio" value="my-radio">String</md-radio>
                            <md-radio v-model="radio">No Value</md-radio>
                            <md-radio v-model="radio" disabled>Disabled</md-radio>

                            <small>Model value: {{ radio }}</small>
                        </div>
                    </md-tab>

 <md-tab id="tab-sports" md-label="Sports" md-icon="language">

<template>
 

    <md-card>
      <md-card-media>
        <img src="/img/WD2.png" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>


 <md-card>
      <md-card-media>
        <img src="/img/lol.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>



 <md-card>
      <md-card-media>
        <img src="/img/hearthstone.jpg" alt="People">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Title goes here</div>
        <div class="md-subhead">Subtitle here</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button class="md-icon-button">
              <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>




</template>

<style>
 



  .md-card-content {
    width: 320px;
    margin-bottom: 10px;
    display: inline-block;
    vertical-align: top;
  }
</style>






                        <div>
                            <md-button class="md-icon-button">
                                <md-icon>home</md-icon>
                            </md-button>

                            <md-button class="md-icon-button md-accent">
                                <md-icon>thumb_up</md-icon>
                            </md-button>
                        </div>
                        <div>
                            <md-radio v-model="radio" :value="false">Boolean</md-radio>
                            <md-radio v-model="radio" value="my-radio">String</md-radio>
                            <md-radio v-model="radio">No Value</md-radio>
                            <md-radio v-model="radio" disabled>Disabled</md-radio>

                            <small>Model value: {{ radio }}</small>
                        </div>
                    </md-tab>


                      <md-tab id="tab-shooter" md-label="Shooter" md-icon="my_location">
                            <div>
                                <md-dialog-confirm
                                  :md-active.sync="active"
                                  md-title="Use Google's location service?"
                                  md-content="Let Google help apps determine location. <br> This means sending <strong>anonymous</strong> location data to Google, even when no apps are running."
                                  md-confirm-text="Agree"
                                  md-cancel-text="Disagree"
                                  @md-cancel="onCancel"
                                  @md-confirm="onConfirm" />

                                <md-button class="md-primary md-raised" @click="active = true">Confirm</md-button>
                                <span v-if="value">Value: {{ value }}</span>
                            </div>
                        </md-tab>

                      <md-tab id="tab-puzzle" md-label="Puzzle" md-icon="widgets">
                            <div>
                                <span><md-chip class="md-primary" v-for="chip in primary" :key="chip">{{ chip }}</md-chip></span>
                                <span><md-chip class="md-accent" v-for="chip in accent" :key="chip" md-clickable>{{ chip }}</md-chip></span>
                            </div>    
                        </md-tab>

                </md-tabs> 
            </div>     

		              





		     

                

                

                
        </div>
`
                     };
