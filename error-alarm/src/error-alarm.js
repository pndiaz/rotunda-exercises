const fs = require('fs');

class ErrorLogger {

    async logError(error) {
        // This function is called each time there is an error and appends the error to the end of the log file.
        // The logic of checking the error frecuency shouldn't be here just to not affect the save error logic.
    }

    async sendEmailErrorNotification() { }

    /**
     * Cron job that allow us read from the text file and decide if it's necessary to send an email notification
     * We can define to run this once a minute and skip checking if the email was sent in the past minute
     */
    async checkErrorFrecuency() {

        // Read errors from file
        // Ideally we need another structure to read only the lastest errors or keep a memory array to avoid reading the file every time.
        const errors = fs.readFileSync('error.log');
        const currentTimestamp = Date.now();


        //Filter only the errors in the last minute
        const errorsInLastMinute = errors.filter((error) => {

            // Extract timestamp from the log in someway
            const logTimestamp = new Date(error.split('-')[0]).getTime();

            return currentTimestamp - logTimestamp < 60000;
        });


        if (errorsInLastMinute.length > 10) {
            // Send email notification
            if (currentTimestamp - lastNotificationTimestamp > 60000) {
                
                this.sendEmailErrorNotification();

                // Update email timestamp
                lastNotificationTimestamp = currentTimestamp;
            }
        }
    }
};


module.exports = { ErrorLogger }