
class ErrorLogger {

    async logError(error) {
        // This function is called each time there is an error and appends the error to the end of the log file.
    }

    async sendEmailErrorNotification() { }

    /**
     * Cron job that allow us read from the text file and decide if it's necessary to send an email notification
     */
    async checkErrorFrecuency() {

        // Read errors from file
        // Ideally get the last 10 errors to avoid read the entire file. We need a DB for that.
        const errors = []
        const currentTimestamp = Date.now();

        //Filter only the errors in the last minute
        const errorsInLastMinute = errors.filter((error) => {

            // Extract timestamp from the log in someway
            const logTimestamp = new Date(error.split('-')[0]).getTime();
            return currentTimestamp - logTimestamp < 60000;
        });

        if (errorsInLastMinute > 10) {
            if (currentTimestamp - lastNotificationTimestamp > 60000) {
               
                // Send email notification
                this.sendEmailErrorNotification();

                // Update email timestamp
                lastNotificationTimestamp = currentTimestamp;
            }
        }
    }
}


module.exports = { ErrorLogger }